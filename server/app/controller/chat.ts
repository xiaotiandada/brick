import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    console.log('chat :', process.pid);
    console.log(ctx.args)
    let { token, firstId, lastId } = ctx.args[0]
    for (let index = firstId; index <= lastId; index++) {
      const res = await ctx.service.user.say(index, token);
      ctx.socket.emit('res', res);
    }
  }
}
