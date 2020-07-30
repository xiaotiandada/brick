import { Service } from 'egg';
import { isNull } from '../public/utils/utils';
import * as moment from 'moment';

/**
 * Notification Service
 */
export default class Notification extends Service {
  public async getNotification(type: string) {
   try {
     if (type === 'system') {
       const list = await this.app.mysql.select('notifications_system');
       return {
         code: 0,
         message: '成功',
         data: list,
     }
     } else {
       //
       return {
         code: 0,
       }
     }

   } catch (e) {
     this.logger.error(e);
     console.log(e);
     return {
       code: -1,
     }
   }
  }

  public async notificationRead(uid: string) {
    try {
      let result = false;
      // 查询所有通知
      const notificationList = await this.app.mysql.select('notifications_system');
      // 对比表查看是否还有未阅读的
      for (const key of notificationList) {
        const resultRead = await this.app.mysql.get('notifications_system_read', {
          nid: key.id,
          uid,
        });
        // 如果有一条没有阅读 返回true
        if (isNull(resultRead)) {
          result = true;
          break
        }
      }

      return {
        code: 0,
        message: '成功',
        data: result,
      }
    } catch (e) {
      this.logger.error(e);
      return {
        code: -1,
        message: '失败',
      }
    }
  }
  public async notificationReadPost(uid: string) {
    const conn = await this.app.mysql.beginTransaction();
    try {
      // 查询所有通知
      const notificationList = await conn.select('notifications_system');
      for (const key of notificationList) {
        // 查询是否已经阅读过了
        const resultRead = await this.app.mysql.get('notifications_system_read', {
          nid: key.id,
          uid,
        });

        if (isNull(resultRead)) {
          await conn.insert('notifications_system_read', {
            nid: key.id,
            uid,
            create_time: moment().format('YYYY-MM-DD hh:mm:ss'),
          });
        }
      }
      await conn.commit();
      return {
        code: 0,
        message: '成功',
      }
    } catch (e) {
      await conn.rollback();
      this.logger.error(e);
      return {
        code: -1,
        message: '失败',
      }
    }
  }
}
