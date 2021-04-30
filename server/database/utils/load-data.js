const Sequelize = require('sequelize');
const {
    UserSchema,
    FriendshipSchema,
    FriendshipStatusSchema,
    FriendshipStatusCodeSchema,
    MessageSchema,
    MessageRecipientSchema,
} = require('../schema/models');

const {
    users,
    messages,
    messageRecipients,
    friendships,
    friendshipStatuses,
    friendshipStatusCodes,
} = require('../load-data');

const initModels = (sequelize) => {
    return {
        User: UserSchema(sequelize),
        Friendship: FriendshipSchema(sequelize),
        FriendshipStatus: FriendshipStatusSchema(sequelize),
        FriendshipStatusCode: FriendshipStatusCodeSchema(sequelize),
        Message: MessageSchema(sequelize),
        MessageRecipient: MessageRecipientSchema(sequelize),
    }
};

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

const loadData = async () => {
    const { User, Message, MessageRecipient, Friendship, FriendshipStatus, FriendshipStatusCode } = initModels(sequelize);

    try{
        users.forEach(async (user) => await User.create({...user}));
        messages.forEach(async (message) => await Message.create({...message}));
        messageRecipients.forEach(async (messageRecipient) => await MessageRecipient.create({...messageRecipient}));
        friendships.forEach(async (friendship) => await Friendship.create({...friendship}));
        friendshipStatuses.forEach(async (friendshipStatus) => await FriendshipStatus.create({...friendshipStatus}));
        friendshipStatusCodes.forEach(async (friendshipStatusCode) => await FriendshipStatusCode.create({...friendshipStatusCode}));
    }
    catch(err){
        console.log(err)
    }
};

module.exports = {
    loadData,
};