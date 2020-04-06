import { Controller } from 'egg';

export default class NotificationController extends Controller {
    public async notification() {
        // @ts-ignore
        const { ctx, app } = this;
        const nsp = app.io.of('/notification');

        try {
            const data = {
                action: '123',
            };
            nsp.emit('notification', data);
            console.log('data', data);
        } catch (error) {
            app.logger.error(error);
        }

        ctx.body = '1';

    }
}
