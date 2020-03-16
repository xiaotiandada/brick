import { Controller } from 'egg';

export default class AccountController extends Controller {
  public async registered() {
    const { ctx } = this;
    ctx.body = await ctx.service.account.registered(ctx.request.body);
  }
}
