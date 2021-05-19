const FriendshipModel = require('../../../database/schema/friendship');
const FriendshipStatusModel = require('../../../database/schema/friendship-status');
const { sequelize } = require('../../../database');

const editFriendshipResolver = async ( 
    parentValue,
    { requesterId, addresseeId, actionUserId, statusCode }
) => {
    const friendshipModel = FriendshipModel(sequelize);
    const friendshipStatusModel = FriendshipStatusModel(sequelize);

    const STATUS_MAP = {
        'R': 1, // request
        'A': 1, // accept
        'D': 1, // decline
        'B': 1, // block
    };

    try {
        if(!STATUS_MAP[statusCode]){
            throw new Error(`statusCode error: can only be of type R, A, D, or B - statusCode ${statusCode}`)
        }
        console.log('yoooo')
        await friendshipModel.create({
            requesterId,
            addresseeId,
        });

        await friendshipStatusModel.create({
            requesterId,
            addresseeId,
            specifiedDateTime: new Date(),
            statusCode,
            specifierId: actionUserId,
        });

        return null;
        
    } catch(err){
        console.log(err)
    }
};

module.exports = editFriendshipResolver;