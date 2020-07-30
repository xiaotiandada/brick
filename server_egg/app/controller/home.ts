import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx, app } = this;
    let body = await ctx.service.test.sayHi('egg');
    body += ` ${app.config['_port']}`
    ctx.body = body
  }
}
