import { Service } from 'egg';
import * as superagent from 'superagent';
import * as cheerio from 'cheerio';

/**
 * Test Service
 */
export default class Test extends Service {
  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }

  /**
   * say hi to you zhanku
   * @param name
   */
  public async getList(page: number = 1) {
    /**
     * 获取Html
     * @param url
     */
    const getHtml = async (url: string) => {
      try {
        const res = await superagent.get(url);
        return res.text;
      } catch (e) {
        console.log('e', e);
        return '';
      }
    };

    /**
     * 解析Html，获取list
     * @param html
     */
    const getList = async (html: string) => {
      const resultLimit: number = 100;
      if (!html) return { resultList: [], resultLimit }; // 没html返回
      const $ = cheerio.load(html);
      const arr: any = []; // 储存需要下载的数据
      // 获取dom 循环写入数据
      $('.all-work-list .work-list-box .card-box').each((i, el) => {
        console.log('---', i);
        const img = $(el).find('.card-img a img').attr('src');
        const title = $(el).find('.card-info .card-info-title a').text();
        const href = $(el).find('.card-img a').attr('href')
        arr.push({
          title: title.replace(/\//g, ''), // 去掉 / 因为 / 会认为是路径, 根据实际情况来操作
          url: img.replace('@260w_195h_1c_1e_1o_100sh.jpg', ''), // 去掉后缀 不使用缩略图 根据实际情况来操作
          href,
        });
      });
      return {
        resultList: arr,
        resultLimit,
      };
    };

    const { zcool } = this.config;
    const resultHtml = await getHtml(`${zcool}/?p=${page}`);
    const { resultList, resultLimit } = await getList(resultHtml);
    return {
      code: 0,
      message: '成功',
      data: {
        page,
        limit: resultLimit,
        list: resultList,
      },
    };
  }
}
