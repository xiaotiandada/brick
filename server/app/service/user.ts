import { Service } from 'egg';

export default class Test extends Service {
  public async say(id: string, token: string) {
    const { ctx } = this;
    const { mApi } = this.config;
    try {
      const res = await ctx.curl(`${mApi}/follow/follow`, {
        method: 'POST',
        data: {
          uid: id
        },
        headers: {
          'x-access-token': token,
        },
        dataType: 'json',
      });
  
      if (res.status === 200 && res.data.code === 0) return {
        code: 0,
        message: `关注(${id})用户，成功！ - ${res.data.message}`
      }
      else return {
        code: res.data.code,
        message: `关注ID：(${id})用户，失败！ - ${res.data.message}`
      }
    } catch (error) {
      return {
        code: -1,
        message: `关注ID：(${id})用户，失败! - 发生错误！`
      }
    }
  }
}
