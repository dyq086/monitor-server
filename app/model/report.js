/*
 * @Author: yongqing
 * @Date:   2019-07-15 17:54:05
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-08-21 15:31:52
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
        name: STRING,
        type: STRING,
        title: STRING,
        message: TEXT,
        script_uri: STRING,
        line_no: INTEGER,
        column_no: INTEGER,
        stack: TEXT,
        resource_url: STRING,
        category: STRING,
        referrer: STRING,
        origin: STRING,
        mobile: STRING,
        user_agent: TEXT,
        os: STRING,
        version: STRING,
        cookies: TEXT,
        win_with: INTEGER,
        wind_height: INTEGER,
        language: STRING,
        cid: STRING,
        cip: STRING,
        cname: STRING,
        time: BIGINT,
        env: STRING,
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