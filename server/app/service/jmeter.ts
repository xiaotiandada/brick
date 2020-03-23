import { Service } from 'egg';
import { isNull, componse } from '../public/utils/utils';

// 默认数据
const banner = [
  {
    title: '写死的标题1',
    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1749926345,2660786190&fm=26&gp=0.jpg',
  },
  {
    title: '写死的标题2',
    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1749926345,2660786190&fm=26&gp=0.jpg',
  },
  {
    title: '写死的标题3',
    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1749926345,2660786190&fm=26&gp=0.jpg',
  },
  {
    title: '写死的标题4',
    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1749926345,2660786190&fm=26&gp=0.jpg',
  },
  {
    title: '写死的标题5',
    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1749926345,2660786190&fm=26&gp=0.jpg',
  },
];

/**
 * Jmeter Service
 */
export default class Jmeter extends Service {
  // 初始化Redis jmeter data
  public async initJmeterData() {
    try {
      // 清空
      await this.app.redis.ltrim('banner', 1, 0);
      for (let i = 0; i < banner.length; i++) {
        const item = banner[i];
        // 设置单个对象
        await this.app.redis.hmset(`banner${i}`, item);
        // 设置对象集合 key
        await this.app.redis.rpush('banner', `banner${i}`);
      }
      return {
        code: 0,
        message: '成功',
      }
    } catch (e) {
      console.log(e);
      this.ctx.logger.error(new Error(`initJmeterData fail: ${e}`));
      return {
        code: -1,
        message: e,
      }
    }
  }

  // 固定数据返回
  public async jmeter() {
    return {
      code: 0,
      data: banner,
      message: '成功',
    };
  }

  // 数据库返回数据
  public async jmeterDbs() {
    try {
      const results = await this.app.mysql.select('jmeter', {
        columns: [ 'title', 'url' ], // 要查询的表字段
        limit: 5, // 返回数据量
      });
      if (results) {
        return {
          code: 0,
          data: results,
          message: '成功',
        }
      } else {
        return {
          code: -1,
          message: '失败',
        }
      }
    } catch (e) {
      console.log(e);
      this.ctx.logger.error(new Error(`jmeterDbs fail: ${e}`));
      return {
        code: -1,
        message: e,
      }
    }
  }

  // redis 数据返回
  public async jmeterRedis() {
    const { app } = this;
    try {
      // 得到all list
      const bannerList = await app.redis.lrange('banner', 0, -1);
      // pipe
      const pipeline = this.app.redis.pipeline();
      // add pipe
      for (const key of bannerList) {
        await pipeline.hgetall(key);
      }
      // 执行
      const result = await pipeline.exec();
      // 过滤
      const listFilter = data => data.filter(item => !isNull(item[1]));
      const listMap = data => data.map(item => item[1]);

      const list = componse(listMap, listFilter)(result);
      return {
        code: 0,
        data: list,
        message: '成功',
      }
    } catch (e) {
      console.log(e);
      this.ctx.logger.error(new Error(`jmeterRedis fail: ${e}`));
      return {
        code: -1,
        message: e,
      }
    }
  }
}
