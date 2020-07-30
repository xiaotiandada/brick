import { Service } from 'egg';
import { WeChat, AccessTokenApi, ApiConfigKit } from 'tnwx';
import { default as wx } from '../utils/wechat';

export default class Wx extends Service {

  public async getSign(request, response) {
    console.log(request, response)

    return {
      appId: 'appId',
      timestamp: 'timestamp',
      nonceStr: 'nonceStr',
      signature: 'signature',
    };
  }

  public async getAccessToken() {
    await wx.init()
    const res = await AccessTokenApi.getAccessToken()
    console.log('res', res)
    return res
  }

  public async getMsg(req: any, res: any) {
    console.log('get query...', req.query);
    console.log('get res...', res);

    await wx.init()

    let appId: string = req.query.appId;
    if (appId) {
        await ApiConfigKit.setCurrentAppId(appId);
    }

    let signature = req.query.signature,//微信加密签名
        timestamp = req.query.timestamp,//时间戳
        nonce = req.query.nonce,//随机数
        echostr = req.query.echostr;//随机字符串
    return await WeChat.checkSignature(signature, timestamp,nonce, echostr)
  }
}
