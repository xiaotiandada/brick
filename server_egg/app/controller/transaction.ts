import { Controller } from 'egg';

export default class TransactionController extends Controller {
  public async transaction() {
    const { ctx } = this;
    ctx.body = await ctx.service.transation.transaction();
  }

  public async transactionAuto() {
    const { ctx } = this;
    ctx.body = await ctx.service.transation.transactionAuto();
  }
}
