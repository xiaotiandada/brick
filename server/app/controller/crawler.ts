import { Controller } from 'egg';

export default class CrawlerController extends Controller {
  public async getImgList() {
    const { ctx } = this;
    const page = ctx.query.page || 1;
    ctx.body = await ctx.service.crawler.getList(page);
  }
}
