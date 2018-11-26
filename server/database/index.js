const { pool, connection } = require('./connection');
const { select,
    insert,
    remove,
    update
} = require('./commands');

const Database = {
    connection,
    pool,
    select,
    insert,
    remove,
    update
}

module.exports = Database;