const { sequelize } = require('../../database/index');
const UserModel = require('../../database/schema/user');
const { generatePasswordHash } = require('../../utils/password');

module.exports = async(req, res) => {
    const { body = {} } = req;
    const { email, password, username } = body;
    const userModel = UserModel(sequelize);

    try {
        const passwordhash = await generatePasswordHash(password);

        await userModel.create({
            email,
            password: passwordhash,
            username,
        });

        res.sendStatus(201);
    }
    catch(error){
        console.log(error);
    }
};