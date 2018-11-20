const { Pool, Client } = require('pg');
const { 
    DB_USER,
    DB_HOST,
    DB_PASS,
    DB_NAME,
    DB_PORT
} = require('../config/config');

const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASS,
    database: DB_NAME,
    port: DB_PORT,
    // connectionString: 'postgres://postgres:pass@192.168.99.100:5432/postgres'
});

const connection =  () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT NOW()`, (err, res) => {
            if(err) {
                reject(err);
            }
            
            resolve(res);
        });
    });
}

module.exports = connection;