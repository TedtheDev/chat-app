const UserModel = require('../../../database/schema/user');
const { sequelize } = require('../../../database');

const editUserResolver = async (parentValue, {id, ...args}) => {
    const userModel = UserModel(sequelize);

    try {
        await userModel.update({
            ...args,
        },{
            where: {
                id,
            }
        });

        const user = await userModel.findOne({
            raw: true,
            where: {
                id,
            }
        });

        return user;
    } catch(err){
        console.log(err)
    }
};

module.exports = editUserResolver;