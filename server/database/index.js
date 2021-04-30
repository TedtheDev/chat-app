const Sequelize = require('sequelize');
const { pool, connection } = require('./connection');
const { select,
    insert,
    remove,
    update
} = require('./commands');
const { init } = require('./utils/init');
const { loadData } = require('./utils/load-data');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres'
    }
);

const Database = {
    connection,
    pool,
    select,
    insert,
    remove,
    update,
    initTables: init,
    loadInitialData: loadData,
    sequelize,
}

module.exports = Database;