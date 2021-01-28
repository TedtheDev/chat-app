const { pool, connection } = require('./connection');
const { select,
    insert,
    remove,
    update
} = require('./commands');
const schema = require('./schema/init');

const Database = {
    connection,
    pool,
    select,
    insert,
    remove,
    update,
    initTables: schema.init
}

module.exports = Database;