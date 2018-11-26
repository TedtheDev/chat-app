module.exports = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASS: process.env.DB_PASS || 'password',
    DB_NAME: process.env.DB_NAME || 'postgres',
    DB_PORT: process.env.DB_PORT || '5432'
}