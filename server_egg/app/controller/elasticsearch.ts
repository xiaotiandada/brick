import { Controller } from 'egg';

export default class ElasticsearchController extends Controller {
  public async search() {
    const { ctx } = this;
    const wd = ctx.query.wd;
    if (wd) {
      const result = await ctx.service.elasticsearch.search(wd)
      if (result) {
        ctx.body = {
          code: 0,
          data: result,
          message: '成功',
        }
      } else {
        ctx.body = {
          code: 0,
          data: [],
          message: '没有搜素到内容',
        }
      }
    } else {
      ctx.body = {
        code: -1,
        message: '没有搜素关键字',
      }
    }
  }
}
