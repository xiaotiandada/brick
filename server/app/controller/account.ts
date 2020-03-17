import { Controller } from 'egg';

export default class AccountController extends Controller {
  public async registered() {
    const { ctx } = this;
    ctx.body = await ctx.service.account.registered(ctx.request.body);
  }

  public async verifyUser() {
    const { ctx } = this;
    ctx.body = await ctx.service.account.verifyUser(ctx.request.body.username);
  }

  public async login() {
    const { ctx } = this;
    ctx.body = await ctx.service.account.login(ctx.request.body);
  }
}
