import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, io } = app;

  router.get('/', controller.home.index);

  // --------------------------- 账号 ------------------------------------
  // 注册
  router.post('/api/v1/registered', controller.account.registered);
  // 登录

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
