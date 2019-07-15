'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    const apiV1Router = app.router.namespace('/api/v1');
    router.get('/', controller.home.index);
    
    apiV1Router.post('/report_js_error', controller.report.save);

};