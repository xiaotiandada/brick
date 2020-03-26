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
   *
   * @param token
   */
  private async jwtVerify (token: string) {
    return await jwt.verify(token, 'shhhhh');
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
   * 加密
   * @param data
   */
  private async bcryptHash(data: string) {
    const saltRounds = 10; // bcrypt default
    return await bcrypt.hash(data, saltRounds);
  }

  /**
   * 校验
   * @param data
   * @param hash
   */
  private async bcryptCompare(data: string, hash: string) {
   return await bcrypt.compare(data, hash)
  }

  /**
   * 注册账号
   * @param data
   */
  private async registeredAccount(data: RegisteredType) {
    const verifyResult = await this.verifyUsername(data.username);
    if (!verifyResult) {
      try {
        // 加密
        const res = await this.bcryptHash(data.password);
        // 插入账号
        const result = await this.app.mysql.insert('account', {
          username: data.username,
          password: res,
          timestamp: this.app.mysql.literals.now,
        });

        // 判断插入成功
        if (result.affectedRows === 1) {
          try {
            // token
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
        console.log(e);
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

  // 查询账号是否存在
  public async verifyUser(username: string) {
    if (!username) {
      return {
        code: -1,
        message: '用户名不能为空',
      };
    }
    const res = await this.app.mysql.get('account', { username });
    if (res) {
      return {
        code: 0,
        message: '用户已存在',
      };
    } else {
      return {
        code: -1,
        message: '用户不存在',
      };
    }

  }

  // 登录
  public async login(data: RegisteredType) {
    if (isNull(data)) {
      return {
        code: -1,
        message: 'error',
      };
    }

    // 更新登录时间和ip地址
    const updateLastTime = async (id: number) => {
      try {
        const result = await this.app.mysql.update('account', {
          id,
          lasttime: this.app.mysql.literals.now,
          ip: this.ctx.ip,
        });
        if (result.affectedRows === 1) {
          console.log('update lasttime success');
        } else {
          console.log('update lasttime fail');
          this.ctx.logger.error(new Error('update lasttime fail'));
        }
      } catch (e) {
        console.log(e)
        this.ctx.logger.error(new Error(`update lasttime fail, ${e}`));
      }
    }

    try {
      // 查用户
      const verifyUserRes = await this.verifyUser(data.username);
      if (verifyUserRes.code === 0) {
        // 校验密码

        // 查询hash
        const userInfoRes = await this.app.mysql.get('account', { username: data.username });
        // 校验
        const compareRes = await this.bcryptCompare(data.password, userInfoRes.password);
        if (compareRes) {
          // 成功 返回token
          const token = this.jwtCreate(data.username);

          // 更新数据
          await updateLastTime(userInfoRes.id);

          return {
            code: 0,
            data: token,
            message: '成功',
          };
        } else {
          // 失败
          return {
            code: -1,
            message: '账号或密码错误',
          }
        }
      } else {
        // 没有用户
        return {
          code: -1,
          message: '账号或密码错误',
        }
      }
    } catch (e) {
      console.log(e);
      this.ctx.logger.error(new Error(`loginError: ${e}`));
      return {
        code: -1,
        message: '登录失败',
      }
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

  // 修改密码
  public async resetPassword(data: RegisteredType) {
    if (isNull(data)) {
      return {
        code: -1,
        message: 'error',
      };
    }

    try {
      // 查询
      const userInfoRes = await this.app.mysql.get('account', { username: data.username });
      // 加密
      const bcrypthHash = await this.bcryptHash(data.password);
      // 更新密码
      const result = await this.app.mysql.update('account', {
        id: userInfoRes.id,
        password: bcrypthHash,
      });
      if (result.affectedRows === 1) {
        return {
          code: 0,
          message: '更新成功',
        }
      } else {
        this.ctx.logger.error(new Error('update password fail'));
        return {
          code: -1,
          message: '更新失败',
        }
      }
    } catch (e) {
      console.log(e)
      this.ctx.logger.error(new Error(`update password fail: ${e}`));
      return {
        code: -1,
        message: '更新失败',
      }
    }
  }

  // 删除用户
  public async deleteUser(data: RegisteredType) {
    if (isNull(data)) {
      return {
        code: -1,
        message: 'error',
      };
    }
    try {
      // 删除
      const deleteResult = await this.app.mysql.delete('account', {
        username: data.username,
      });
      if (deleteResult.affectedRows === 1) {
        return {
          code: 0,
          message: '删除成功',
        }
      } else {
        this.ctx.logger.error(new Error(`delete user fail: ${deleteResult}`));
        return {
          code: -1,
          message: '删除失败',
        }
      }
    } catch (e) {
      console.log(e);
      this.ctx.logger.error(new Error(`delete user fail: ${e}`));
      return {
        code: -1,
        message: '删除失败',
      }
    }
  }

  // 验证token
  public async tokenVerify (token) {
    try {
      const jwtVerifyResult = await this.jwtVerify(token);
      console.log('jwtVerifyResult', jwtVerifyResult);
      if (jwtVerifyResult) {
        return {
          code: 0,
          message: '验证成功',
        }
      } else {
        return {
          code: -1,
          message: '验证失败',
        }
      }
    } catch (e) {
      console.log(e);
      this.ctx.logger.error(new Error(`verifyUsername: ${e}`));
      return {
        code: -1,
        message: e.toString(),
      }
    }
  }
}
