const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

const User = require('./user')(sequelize);

const initializeDatabase = () => {
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    User.sync()
        .then(() => {
            console.log('User Table Synced');
            sequelize.close();
        });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    sequelize.close();
  });
}

const dbApi = {
  init: initializeDatabase
}

module.exports = dbApi;