import { Controller } from 'egg';
const crypto = require('crypto')

export default class WxController extends Controller {
  public async index() {
    const { ctx } = this;

    const { signature, timestamp, nonce, echostr } = ctx.query
    
    const token = 'weixin'

    let hash = crypto.createHash('sha1')
    const arr = [token, timestamp, nonce].sort()
    hash.update(arr.join(''))
    const shasum = hash.digest('hex')
    if (shasum === signature) {
      return (ctx.body = echostr)
    }
    ctx.status = 401
    ctx.body = 'Invalid signature'
    
  }
  public async getSign(request: any, response: any) {
    const { ctx } = this;
    ctx.body = await ctx.service.wx.getSign(request, response);
  }
  public async getAccessToken() {
    const { ctx } = this;
    ctx.body = await ctx.service.wx.getAccessToken();
  }
  public async getMsg(req: any, res: any) {
    const { ctx } = this;
    ctx.body = await ctx.service.wx.getMsg(req, res);
  }
}
