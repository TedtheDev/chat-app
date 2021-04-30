const UserModel = require('../../../database/schema/user');
const { sequelize } = require('../../../database');

const getUserResolver = async (parentValue, args) => {
    const User = UserModel(sequelize);

    try {
        const user = await User.findOne({
            raw: true,
            where: {
                ...args
            }
        });

        return user;
    } catch(err){
        console.log(err)
    }
};

module.exports = {
    getUserResolver,
}