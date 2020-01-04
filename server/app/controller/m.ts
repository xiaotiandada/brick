import { Controller } from 'egg';

export default class MController extends Controller {
  public async postImport() {
    const { ctx } = this;
    const { url, token } = ctx.request.body;
    ctx.body = await ctx.service.m.postImport(url, token);
  }
}

