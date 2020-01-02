'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // -------------------------- 爬虫 ---------------------
  // 站酷
  router.get('/api/v1/zcool', controller.home.getImgList);
};
