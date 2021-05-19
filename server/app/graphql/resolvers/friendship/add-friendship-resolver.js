const FriendshipModel = require('../../../database/schema/friendship');
const FriendshipStatusModel = require('../../../database/schema/friendship-status');
const { sequelize } = require('../../../database');

const addFriendshipResolver = async (parentValue, { requesterId, addresseeId, actionUserId }) => {
    const friendshipModel = FriendshipModel(sequelize);
    const friendshipStatusModel = FriendshipStatusModel(sequelize);

    try {
        console.log('yoooooo')
        await friendshipModel.create({
            requesterId,
            addresseeId,
        });

        await friendshipStatusModel.create({
            requesterId,
            addresseeId,
            specifiedDateTime: new Date(),
            statusCode: 'R', // request
            specifierId: actionUserId,
        });

        console.log('yoooooo again')
        return null;
        
    } catch(err){
        console.log('error in adding friend', err)
    }
};

module.exports = addFriendshipResolver;