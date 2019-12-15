import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async getImgList() {
    const { ctx } = this;
    const page = ctx.query.page || 1;
    ctx.body = await ctx.service.test.getList(page);
  }
}
