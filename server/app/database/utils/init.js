const Sequelize = require('sequelize');
const {
  UserSchema,
  FriendshipSchema,
  FriendshipStatusSchema,
  FriendshipStatusCodeSchema,
  MessageSchema,
  MessageRecipientSchema,
} = require('../schema/models');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

const initTables = (tables) => {
  const promises = () => {
    return tables.map((table) => {
      // table.drop();
      return table.sync({force: true, alter: true});
    });
  }
  return new Promise((resolve, reject) => {
    return Promise.allSettled(promises())
    .then((results) => {
      results.forEach((result) => {
        if(result === 'rejected'){
          reject(`table did not sync`)
        }
      });

      resolve();
    });
  });
}

const initializeDatabase = async () => {
  console.log('Initilize database tables...')
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await initTables([
      UserSchema(sequelize),
      FriendshipSchema(sequelize),
      FriendshipStatusSchema(sequelize),
      FriendshipStatusCodeSchema(sequelize),
      MessageSchema(sequelize),
      MessageRecipientSchema(sequelize),
    ]);
    
  } catch(err){
    console.error('Unable to connect to the database:', err);
  } finally {
    await sequelize.close();
  }
}

const dbApi = {
  init: initializeDatabase,
}

module.exports = dbApi;