const { pool, connection } = require('./connection');
const { select,
    insert,
    remove,
    update
} = require('./commands');
const { init } = require('./utils/init');
const { loadData } = require('./utils/load-data');

const Database = {
    connection,
    pool,
    select,
    insert,
    remove,
    update,
    initTables: init,
    loadInitialData: loadData,
}

module.exports = Database;