const Sequelize = require('sequelize');
const {
    UserSchema,
    FriendshipSchema,
    FriendshipStatusSchema,
    FriendshipStatusCodeSchema,
    MessageSchema,
    MessageRecipientSchema,
} = require('../schema/models');
// const users = require('../load-data/users');
// const messages = require('../load-data/messages');
// const messageRecipients = require('../load-data/message-recipients');
const {
    users,
    messages,
    messageRecipients
} = require('../load-data');

const initModels = (sequelize) => {
    return {
        User: UserSchema(sequelize),
        // Friendship: FriendshipSchema(sequelize),
        // FriendshipStatus: FriendshipStatusSchema(sequelize),
        // FriendshipStatusCode: FriendshipStatusCodeSchema(sequelize),
        Message: MessageSchema(sequelize),
        MessageRecipient: MessageRecipientSchema(sequelize),
    }
};

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

const loadData = async () => {
    const { User, Message, MessageRecipient } = initModels(sequelize);

    try{
        await users.forEach(async (user) => await User.create({...user}));
        await messages.forEach(async (message) => await Message.create({...message}));
        await messageRecipients.forEach(async (messageRecipient) => await MessageRecipient.create({...messageRecipient}));
    }
    catch(err){
        console.log(err)
    }
};

module.exports = {
    loadData,
};