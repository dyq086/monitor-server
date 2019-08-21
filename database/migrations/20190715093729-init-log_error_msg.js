'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const { INTEGER, DATE, STRING, TEXT, BIGINT } = Sequelize;
        await queryInterface.createTable('log_error_msg', {
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
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('log_error_msg');
    }
};