import { Controller } from 'egg';

export default class NotificationController extends Controller {
    public async notification() {
        // @ts-ignore
        const { ctx, app } = this;
        const { notification } = ctx.request.body;
        const nsp = app.io.of('/notification');
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
            nsp.emit('notification', data);
            console.log('data', data);
        } catch (error) {
            app.logger.error(error);
        }

        ctx.body = '1';

    }
}
