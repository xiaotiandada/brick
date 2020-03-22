import { Service } from 'egg';

/**
 * Transaction Service
 */
export default class Transaction extends Service {
  // 手动
  public async transaction() {
    const conn = await this.app.mysql.beginTransaction(); // 初始化事务

    try {
      const time = Date.now();
      await conn.insert('transaction', {
        username: time,
      });  // 第一步操作

      const options = {
        where: {
          id: 1,
        },
      };
      await conn.update('transaction', {
        username: time,
      }, options);  // 第二步操作

      await conn.commit(); // 提交事务

      return {
        code: 0,
        message: 'success',
      }
    } catch (err) {
      await conn.rollback(); // 一定记得捕获异常后回滚事务！！
      this.ctx.logger.error(new Error(`transaction fail: ${err}`));
      return {
        code: -1,
        message: err,
      }
    }
  }

  // 自动
  public async transactionAuto() {
    // 自动
    try {
      const time = Date.now();
      const result = await this.app.mysql.beginTransactionScope(async conn => {
        // don't commit or rollback by yourself
        await conn.insert('transaction', {
          username: time,
        });

        const options = {
          where: {
            id: 1,
          },
        };
        await conn.update('transaction', {
          username: time,
        }, options);  // 第二步操作

        // await conn.update(table, row2);
        return true
      }, this.ctx); // ctx 是当前请求的上下文，如果是在 service 文件中，可以从 `this.ctx` 获取到
      // if error throw on scope, will auto rollback
      if (result) {
        return {
          code: 0,
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
      this.ctx.logger.error(new Error(`transactionAuto fail: ${e}`));
      return {
        code: -1,
        message: e,
      }
    }
  }
}
