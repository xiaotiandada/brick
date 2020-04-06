import { Controller } from 'egg';

class NotificationController extends Controller {
    async notification(data: object) {
        const { app } = this;
        const nsp = app.io.of('/notification');

        try {
            nsp.emit('notification', data);
        } catch (error) {
            app.logger.error(error);
        }
    }
}

module.exports = NotificationController;
