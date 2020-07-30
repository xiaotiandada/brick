import { Service } from 'egg';
import qs from 'qs';
/**
 * M Service
 */
export default class M extends Service {
  private async postIpfs(title: string, content: string, token: string) {
    const { ctx } = this
    const { mApi } = this.config;
    try {
      console.log(title, content);
      const stringifyData = qs.stringify({
        'data[title]': '952822399@qq.com',
        'data[author]': 'script',
        'data[desc]': 'whatever',
        'data[content]': '31231231',
      });
      console.log(`${mApi}/posts/ipfs`);
      const res = await ctx.curl(`${mApi}/post/ipfs`, {
        method: 'POST',
        data: stringifyData,
        headers: {
          'x-access-token': token,
        },
        dataType: 'json',
      });
      console.log('ipfs', res)
      if (res.status === 200 && res.data.code === 0) return res.data.data
      else return ''
    } catch (error) {
      console.log(error);
      return ''
    }
  }
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
  public async postPublish(title: string, cover: string, content: string, token: string) {
    const { ctx } = this;
    const { mApi } = this.config;
    try {
      const hash = await this.postIpfs(title, content, token)
      if (!hash) throw new Error('not hasp');
      const res = await ctx.curl(`${mApi}/post/publish`, {
        method: 'POST',
        data: {
          author: 'script',
          cover,
          fissionFactor: 2000,
          hash,
          platform: 'email',
          publickey: null,
          sign: null,
          msgParams: null,
          signId: null,
          title,
          is_original: 0,
          tags: '',
          cc_license: null,
          commentPayPoint: 1,
          shortContent: '',
        },
        headers: {
          'x-access-token': token,
        },
        dataType: 'json',
      });
      console.log('postPublish', res);
      return res
    } catch (error) {
      console.log(error);
      return {
        code: -1,
        message: '发生错误',
      };
    }
  }
  public async postLkes(firstId: string, lastId: string, token: string) {
    const { ctx } = this;
    const { mApi } = this.config;
    try {
      console.log(firstId, lastId, token, mApi, ctx)
    } catch (error) {
      console.log(error);
      return {
        code: -1,
        message: '发生错误',
      };
    }
  }
}
