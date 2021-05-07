const UserModel = require('../../../database/schema/user');
const { sequelize } = require('../../../database');

const addUserResolver = async (parentValue, args) => {
    const userModel = UserModel(sequelize);

    try {
        await userModel.create({
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

module.exports = addUserResolver;