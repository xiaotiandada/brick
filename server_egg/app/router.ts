import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io, middleware } = app;

  const verify = middleware.verify();

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
  // 校验token
  router.post('/api/v1/tokenVerify', controller.account.tokenVerify);
  // middleware 校验token
  router.post('/api/v1/tokenVerifyMiddleware', verify, controller.account.tokenVerifyMiddleware);

  // ------------------------- weChat -------------------------------
  router.get('/wx', controller.wx.index);
  router.get('/wx/sign', controller.wx.getSign);
  router.get('/wx/getAccessToken', controller.wx.getAccessToken);
  router.get('/wx/msg', controller.wx.getMsg);

  // ---------------------------- passport ------------------------------------
  // TODO: 没开始
  // 挂载鉴权路由
  app.passport.mount('github');

  // 上面的 mount 是语法糖，等价于
  // const github = app.passport.authenticate('github', {});
  // router.get('/passport/github', github);
  // router.get('/passport/github/callback', github);

  // ---------------------------- 事务 ---------------------------
  // 手动控制
  router.post('/api/v1/transaction', controller.transaction.transaction);
  // 自动控制
  router.post('/api/v1/transactionAuto', controller.transaction.transactionAuto);

  // ---------------------------- jmeter --------------------------------------
  // 初始化数据
  router.post('/api/v1/initJmeterData', controller.jmeter.initJmeterData);
  // 直接返回数据
  // 500 20 25.046335721084006
  router.get('/api/v1/jmeter', controller.jmeter.jmeter);
  // 查询数据库返回数据
  // 500 20 25.047590421801424
  router.get('/api/v1/jmeterDbs', controller.jmeter.jmeterDbs);
  // redis返回数据
  // 500 20 25.042572373034158
  router.get('/api/v1/jmeterRedis', controller.jmeter.jmeterRedis);

  // -------------------------- 爬虫 ---------------------
  // 站酷
  router.get('/api/v1/zcool', controller.crawler.getImgList);
  // -------------------- matataki -----------------
  // 导入文字
  router.post('/api/v1/m/post/import', controller.m.postImport);
  router.post('/api/v1/m/post/publish', controller.m.postPublish);
  router.post('/api/v1/m/post/likes', controller.m.postPublish);

  // io
  // /api/v1/io/*
  router.post('/api/v1/notification', controller.notification.notification);
  // 系统通知列表
  router.get('/api/v1/notification', controller.notification.getNotification);
  // 某个id是否还有未阅读的消息
  router.get('/api/v1/notificationRead', controller.notification.notificationRead);
  // 某个id阅读系统消息
  router.post('/api/v1/notificationRead', controller.notification.notificationReadPost);

  io.of('/api/v1/io/chat').route('exchange', io.controller.chat.exchange);
  // 通知 notification
  // 客户端接受消息

  // elasticsearch
  router.get('/api/search', controller.elasticsearch.search);

};
