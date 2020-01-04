import { Service } from 'egg';

/**
 * M Service
 */
export default class M extends Service {
  /**
   * postImport to you
   * @param url - your url
   */
  public async postImport(url: string, token: string) {
    const { ctx } = this;
    const { mApi } = this.config;
    try {
      const res = await ctx.curl(`${mApi}/posts/importer`, {
        method: 'POST',
        data: {
          url,
        },
        headers: {
          'x-access-token': token,
        },
        dataType: 'json',
      });
      // console.log(res);
      if (res.status === 200) {
        return res.data;
      } else {
        return {
          code: res.status,
          message: '发生错误',
        };
      }
    } catch (error) {
      console.log(error);
      return {
        code: -1,
        message: '发生错误',
      };
    }
  }
}
