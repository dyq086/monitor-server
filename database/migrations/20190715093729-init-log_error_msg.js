'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const { INTEGER, DATE, STRING } = Sequelize;
        await queryInterface.createTable('log_error_msg', {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            title: STRING(30),
            error_message: STRING(500),
            script_uri: STRING(30),
            line_no: INTEGER,
            column_no: INTEGER,
            stack:STRING(200),
            resource_url: STRING(30),
            category: STRING(20),
            created_at: DATE,
            updated_at: DATE
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('log_error_msg');
    }
};