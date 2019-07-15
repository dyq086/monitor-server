/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1563159238276_2919';

    // add your middleware config here
    config.middleware = [];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    config.security = {
        csrf: {
            enable: false
        },
        domainWhiteList: ['*']
    };
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    };

    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        database: 'monitor',
        username: 'root',
        password: 'root'
    };

    return {
        ...config,
        ...userConfig,
    };
};