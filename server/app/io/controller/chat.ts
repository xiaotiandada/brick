import { Controller } from 'egg';
import {error} from "util";

export default class ChatController extends Controller {
    public async exchange() {
        const { ctx, app } = this;
        const message = ctx.args[0];
        const nsp = app.io.of('/');
        const socket = ctx.socket;
        const client = socket.id;

        try {
            // p2p
            const { target, payload } = message;
            if (!target) return;
            const msg = ctx.helper.parseMsg('exchange', payload, { client, target });
            nsp.emit(target, msg);
            console.log(msg);


            // room
            const data = {
                action: 'chat',
                id: message.id,
                message: payload.msg,
            };
            await nsp.emit('chat', data);
            console.log(data);

        } catch (e) {
            app.logger.error(error)
        }
    }
}
