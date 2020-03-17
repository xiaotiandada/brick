import { Service } from 'egg';
// @ts-ignore
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

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
   * 生成 jwt
   * @param username 用户名
   */
  private jwtCreate (username: string) {
    const token = jwt.sign({ username }, 'shhhhh', { expiresIn: '7d' });
    return token;
  }

  /**
   * 校验用户是否存在
   * @param username
   */
  private async verifyUsername(username: string) {
    try {
      const res = await this.app.mysql.get('account', { username });
      if (res) {
        console.log('res', res);
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
      this.ctx.logger.error(new Error(`verifyUsername: ${e}`));
      return false;
    }
  }

  /**
   * 注册账号
   * @param data
   */
  private async registeredAccount(data: RegisteredType) {
    const verifyResult = await this.verifyUsername(data.username);
    if (!verifyResult) {
      const saltRounds = 10; // bcrypt default
      try {
        // 加密
        const res = await bcrypt.hash(data.password, saltRounds);
        // 插入账号
        const result = await this.app.mysql.insert('account', {
          username: data.username,
          password: res,
          timestamp: new Date(),
        });

        // 判断插入成功
        if (result.affectedRows === 1) {
          try {
            const token = this.jwtCreate(data.username);
            return {
              code: 0,
              data: token,
              message: '成功',
            };
          } catch (e) {
            throw new Error('jwt Error');
          }
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
    } else {
      return {
        code: -1,
        message: '用户已存在',
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
