const FriendshipModel = require('../../../database/schema/friendship');
const FriendshipStatusModel = require('../../../database/schema/friendship-status');
const { sequelize } = require('../../../database');

const addFriendshipResolver = async (parentValue, args) => {
    const friendshipModel = FriendshipModel(sequelize);
    const friendshipStatusModel = FriendshipStatusModel(sequelize);

    try {
        await friendshipModel.create({
            ...args,
        });

        await friendshipStatusModel.create({
            ...args,
        });

        const user = await userModel.findOne({
            raw: true,
            where: {
                ...args,
            }
        });

        return user;
    } catch(err){
        console.log(err)
    }
};

module.exports = {
    addFriendshipResolver,
}