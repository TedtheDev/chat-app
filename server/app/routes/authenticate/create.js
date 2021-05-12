const { sequelize } = require('../../database/index');
const UserModel = require('../../database/schema/user');

const authentication = require('../../utils/authentication');
const password = require('../../utils/password');

module.exports = async (req, res) => {
    const { body = {} } = req;
    const { email, password: plainTextPassword } = body;
    
    const userModel = UserModel(sequelize);

    try{
        const user = await userModel.findOne({ raw: true, where: { email } } );
        const { id, username, password: hashedPassword } = user;

        const passwordComparisonResult = await password.comparePasswords(plainTextPassword, hashedPassword );
    
        if(passwordComparisonResult){
            const signedToken = await authentication.signToken({ id, username });

            res.cookie('chat-app-token', signedToken, { domain: 'chat-app.com', sameSite: 'Lax', httpOnly: true, secure: true })
            res.sendStatus(201);
        } else {
            console.log('yooooo invalid pass')
            throw new Error('Password Comparison: password incorrect');
        }
        
    }
    catch(err){
        res.status(401).json({
            message: 'Invalid Credentials'
        });
    }
};