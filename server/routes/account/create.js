const DB = require('../../database/index');
const { generatePasswordHash } = require('../../utils/password');

module.exports = async(req, res) => {
    const { body = {} } = req;
    const { email, password, username } = body;

    try {
        const passwordhash = await generatePasswordHash(password);

        await DB.insert(
            '"Users"',
            { username, password: passwordhash, email }
        );

        res.sendStatus(201);
    }
    catch(error){
        console.log(error);
    }
};