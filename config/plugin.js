'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    cors: {
        enable: true,
        package: 'egg-cors',

    },
    routerPlus: {
        enable: true,
        package: 'egg-router-plus'
    },
    sequelize: {
        enable: true,
        package: 'egg-sequelize',
    }
}