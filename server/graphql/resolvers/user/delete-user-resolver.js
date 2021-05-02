const UserModel = require('../../../database/schema/user');
const { sequelize } = require('../../../database');

const deleteUserResolver = async (parentValue, {id}) => {
    const userModel = UserModel(sequelize);

    try {
        await userModel.destroy({
            where: {
                id,
            }
        });

        return id;
    } catch(err){
        console.log(err)
    }
};

module.exports = {
    deleteUserResolver,
}