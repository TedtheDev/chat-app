const { Op } = require('sequelize');
const UserModel = require('../../../database/schema/user');
const { sequelize } = require('../../../database');

const searchUserResolver = async (parentValue, { searchValue }) => {
    const User = UserModel(sequelize);

    try {
        const users = await User.findAll({
            raw: true,
            where: {
                username: {
                    [Op.iLike]: `%${searchValue}%`,
                }
            }
        });

        return users;
    } catch(err){
        console.log(err)
    }
};

module.exports = searchUserResolver;