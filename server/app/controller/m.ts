import { Controller } from 'egg';

export default class MController extends Controller {
  public async postImport() {
    const { ctx } = this;
    const { url, token } = ctx.request.body;
    ctx.body = await ctx.service.m.postImport(url, token);
  }
  public async postPublish() {
    const { ctx } = this;
    const { title, cover, content, token } = ctx.request.body;
    ctx.body = await ctx.service.m.postPublish(title, cover, content, token);
  }
  public async postLikes() {
    const { ctx } = this;
    const { firstId, lastId, token } = ctx.request.body;
    ctx.body = await ctx.service.m.postLkes(firstId, lastId, token);
  }
}
