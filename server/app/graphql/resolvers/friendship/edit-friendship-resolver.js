const FriendshipModel = require('../../../database/schema/friendship');
const FriendshipStatusModel = require('../../../database/schema/friendship-status');
const { sequelize } = require('../../../database');

const addFriendshipResolver = async ( 
    parentValue,
    { requesterId, addresseeId, actionUserId, status }
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
        if(!STATUS_MAP[status]){
            throw new Error(`Status can be of type A, D, or B: ${status}`)
        }
        await friendshipModel.create({
            requesterId,
            addresseeId,
        });

        await friendshipStatusModel.create({
            requesterId,
            addresseeId,
            specifiedDateTime: new Date(),
            statusCode: status,
            specifierId: actionUserId,
        });

        return null;
        
    } catch(err){
        console.log(err)
    }
};

module.exports = addFriendshipResolver;