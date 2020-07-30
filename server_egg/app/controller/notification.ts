import { Controller } from 'egg';
import * as moment from 'moment';

export default class NotificationController extends Controller {
    public async notification() {
        // @ts-ignore
        const { ctx, app } = this;
        const { notification } = ctx.request.body;
        const nsp = app.io.of('/api/v1/io/notification');
        console.log('notification', notification);

        let data = {};
        if (notification.action === 'system') {
            data = {
                action: 'system',
                timestamp: Date.now(),
                message: '系统为您精心推送的消息！',
            };
        } else if (notification.action === 'user') {
            data = {
                action: 'user',
                type: notification.type, // follow like comment likeComment reply
                timestamp: Date.now(),
                uid: (Date.now() + '').slice(0, 3),
                message: '有新的关注者！',
            };
        } else {
            //
            ctx.body = '1';
            return
        }
        try {
            const insertData = {
                // @ts-ignore
                message: `${data.message}-${data.timestamp}`,
                create_time: moment().format('YYYY-MM-DD hh:mm:ss'),
            };
            await this.app.mysql.insert('notifications_system', insertData);
            await nsp.emit('notification', data);
            console.log('data', data);
        } catch (error) {
            app.logger.error(error);
        }

        ctx.body = '1';

    }

    public async getNotification() {
        const { ctx } = this;
        const { type } = this.ctx.request.query;
        ctx.body = await this.service.notification.getNotification(type)
    }

    public async notificationRead() {
        const { ctx } = this;
        const { uid } = this.ctx.request.query;
        ctx.body = await this.service.notification.notificationRead(uid);
    }
    public async notificationReadPost() {
        const { ctx } = this;
        const { uid } = this.ctx.request.body;
        ctx.body = await this.service.notification.notificationReadPost(uid);
    }
}
