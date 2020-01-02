import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  // -------------------------- 爬虫 ---------------------
  // 站酷
  router.get('/api/v1/zcool', controller.crawler.getImgList);
};
