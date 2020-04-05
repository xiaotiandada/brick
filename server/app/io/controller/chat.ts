import { Controller } from 'egg';

export default class ChatController extends Controller {
    public async join() {
        const { ctx, app } = this
        const nsp = app.io.of('/');
        const message = ctx.args[0];

        await nsp.emit('chat', {
            action: 'join',
            message: message.id,
        });
    }
    public async exchange() {
        const { ctx, app } = this;
        const message = ctx.args[0];
        const nsp = app.io.of('/');
        await app.io.of('/').adapter.clients((err, clients) => {
            console.log(err)
            console.log(clients); // an array containing all connected socket ids
        });
        const data = {
            action: 'chat',
            id: message.id,
            message: message.message,
        };
        await nsp.emit('chat', data);
        console.log(data);
    }
}
