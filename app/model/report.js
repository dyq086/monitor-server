/*
 * @Author: yongqing
 * @Date:   2019-07-15 17:54:05
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-07-15 18:31:50
 */

'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        CHAR,
        BOOLEAN
    } = app.Sequelize;

    const Report = app.model.define('log_error_msg', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        title: STRING(30),
        error_message: STRING(500),
        script_uri: STRING(30),
        line_no: INTEGER,
        column_no: INTEGER,
        stack: STRING(200),
        resource_url: STRING(30),
        category: STRING(20),
        created_at: DATE,
        updated_at: DATE
    }, {
        tableName: 'log_error_msg'
    });

    return Report;
};