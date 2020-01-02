'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.home.sayHi('egg');
  }

  async getImgList() {
    const { ctx } = this;
    const page = ctx.query.page || 1;
    ctx.body = await ctx.service.crawler.getList(page);
  }
}

module.exports = HomeController;
