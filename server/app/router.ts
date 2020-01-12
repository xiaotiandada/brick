import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  // -------------------------- 爬虫 ---------------------
  // 站酷
  router.get('/api/v1/zcool', controller.crawler.getImgList);
  // -------------------- matataki -----------------
  // 导入文字
  router.post('/api/v1/m/post/import', controller.m.postImport);
  router.post('/api/v1/m/post/publish', controller.m.postPublish);
};
