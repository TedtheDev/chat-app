const FriendshipsModel = require('../../../database/schema/friendship');
const UserModel = require('../../../database/schema/user');
const { sequelize } = require('../../../database');

const getFriendsResolver = async (parentValue, args) => {
    try {
        const friendshipModel = FriendshipsModel(sequelize);
        const userModel = UserModel(sequelize);

        const requesterFriends = await friendshipModel.findAll({
            raw: true,
            attributes: [['addresseeId', 'id']],
            where: {
                requesterId: parentValue.id,
            }
        });

        const addresseeFriends = await friendshipModel.findAll({
            raw: true,
            attributes: [['requesterId','id']],
            where: {
                addresseeId: parentValue.id,
            }
        });

        const allFriendIds = [...requesterFriends, ...addresseeFriends].map((friend) => friend.id);

        console.log(allFriendIds);

        const friends = await userModel.findAll({
            where: {
                id: allFriendIds,
            }
        });

        return friends;
    } catch(err){
        console.log(err)
    }
}

module.exports = {
    getFriendsResolver,
}