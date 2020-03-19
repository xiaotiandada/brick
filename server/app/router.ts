import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io } = app;

  router.get('/', controller.home.index);

  // --------------------------- 账号 ------------------------------------
  // 注册
  router.post('/api/v1/registered', controller.account.registered);
  // 校验用户
  router.post('/api/v1/verifyUser', controller.account.verifyUser);
  // 登录
  router.post('/api/v1/login', controller.account.login);
  // 修改密码
  // TODO: 邮箱验证、手机号码验证
  router.post('/api/v1/resetPassword', controller.account.resetPassword);
  // 删除用户
  // TODO: 需要一些安全验证和清理数据
  router.delete('/api/v1/deleteUser', controller.account.deleteUser);

  // -------------------------- 爬虫 ---------------------
  // 站酷
  router.get('/api/v1/zcool', controller.crawler.getImgList);
  // -------------------- matataki -----------------
  // 导入文字
  router.post('/api/v1/m/post/import', controller.m.postImport);
  router.post('/api/v1/m/post/publish', controller.m.postPublish);
  router.post('/api/v1/m/post/likes', controller.m.postPublish);

  // app.io.of('/')
  io.route('chat', controller.chat.index);
  // app.io.of('/chat')
  io.of('/chat').route('chat', controller.chat.index);
};
