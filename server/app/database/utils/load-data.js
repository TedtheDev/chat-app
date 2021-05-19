const Sequelize = require('sequelize');
const {
    UserSchema,
    FriendshipSchema,
    FriendshipStatusSchema,
    FriendshipStatusCodeSchema,
    MessageSchema,
    MessageRecipientSchema,
    UserGroupSchema,
    GroupSchema
} = require('../schema/models');

const {
    users,
    messages,
    messageRecipients,
    friendships,
    friendshipStatuses,
    friendshipStatusCodes,
    userGroups,
    groups,
} = require('../load-data');

const initModels = (sequelize) => {
    return {
        User: UserSchema(sequelize),
        Friendship: FriendshipSchema(sequelize),
        FriendshipStatus: FriendshipStatusSchema(sequelize),
        FriendshipStatusCode: FriendshipStatusCodeSchema(sequelize),
        Message: MessageSchema(sequelize),
        MessageRecipient: MessageRecipientSchema(sequelize),
        UserGroup: UserGroupSchema(sequelize),
        Group: GroupSchema(sequelize),
    }
};

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

const loadData = async () => {
    const { User, Message, MessageRecipient, Friendship, FriendshipStatus, FriendshipStatusCode, UserGroup, Group } = initModels(sequelize);

    try{
        users.forEach(async (user) => await User.create({...user}));
        messages.forEach(async (message) => await Message.create({...message}));
        messageRecipients.forEach(async (messageRecipient) => await MessageRecipient.create({...messageRecipient}));
        friendships.forEach(async (friendship) => await Friendship.create({...friendship}));
        friendshipStatuses.forEach(async (friendshipStatus) => await FriendshipStatus.create({...friendshipStatus}));
        friendshipStatusCodes.forEach(async (friendshipStatusCode) => await FriendshipStatusCode.create({...friendshipStatusCode}));
        userGroups.forEach(async (userGroup) => await UserGroup.create({...userGroup}));
        groups.forEach(async (group) => await Group.create({...group}));
    }
    catch(err){
        console.log(err)
    }
};

module.exports = {
    loadData,
};