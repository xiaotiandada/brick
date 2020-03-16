import { Service } from 'egg';
import * as bcrypt from 'bcrypt';

import { isNull } from '../public/utils/utils';

/**
 * account Service
 */
// interface
// Registered type
interface RegisteredType {
  username: string;
  password: string;
}
export default class Account extends Service {
  /**
   * 注册账号
   * @param data
   */
  private async registeredAccount(data: RegisteredType) {
    const saltRounds = 10; // bcrypt default
    try {
      // 加密
      const res = await bcrypt.hash(data.password, saltRounds);
      // 插入账号
      const result = await this.app.mysql.insert('account', {
        username: data.username,
        password: data.password,
      });

      // 判断插入成功
      if (result.affectedRows === 1) {
        return {
          code: 0,
          data: res,
          message: '成功',
        };
      } else {
        return {
          code: -1,
          message: '注册失败',
        };
      }
    } catch (e) {
      console.log(e)
      this.ctx.logger.error(new Error(`registeredAccount: ${e}`));
      return {
        code: -1,
        message: '注册失败',
      };
    }
  }

  // 注册
  public async registered(data: RegisteredType) {
    if (isNull(data)) {
      return {
        code: -1,
        message: 'error',
      };
    }
    return await this.registeredAccount({
      username: data.username,
      password: data.password,
    });
  }
}
