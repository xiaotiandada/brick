import { Controller } from 'egg';

export default class JmeterController extends Controller {
  public async initJmeterData() {
    const { ctx } = this;
    ctx.body = await ctx.service.jmeter.initJmeterData()
  }

  public async jmeter() {
    const { ctx } = this;
    ctx.body = await ctx.service.jmeter.jmeter()
  }

  public async jmeterDbs() {
    const { ctx } = this;
    ctx.body = await ctx.service.jmeter.jmeterDbs()
  }

  public async jmeterRedis() {
    const { ctx } = this;
    ctx.body = await ctx.service.jmeter.jmeterRedis()
  }
}
