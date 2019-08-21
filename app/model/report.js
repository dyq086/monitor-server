/*
 * @Author: yongqing
 * @Date:   2019-07-15 17:54:05
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-08-21 15:15:32
 */

'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        CHAR,
        BOOLEAN,
        TEXT,
        BIGINT
    } = app.Sequelize;

    const Report = app.model.define('log_error_msg', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(50),
        type: STRING(50),
        title: STRING(50),
        message: TEXT,
        script_uri: STRING,
        line_no: INTEGER,
        column_no: INTEGER,
        stack: TEXT,
        resource_url: STRING(50),
        category: STRING(20),
        referrer: STRING,
        origin: STRING,
        mobile: STRING(50),
        user_agent: TEXT,
        os: STRING(50),
        version: STRING(50),
        cookies: TEXT,
        win_with: INTEGER,
        wind_height: INTEGER,
        language: STRING(50),
        cid: STRING(50),
        cip: STRING(50),
        cname: STRING(50),
        time: BIGINT,
        env: STRING(50),
        response: TEXT,
        request: TEXT,
        created_at: DATE,
        updated_at: DATE,
        status: INTEGER
    }, {
        tableName: 'log_error_msg'
    });

    return Report;
};