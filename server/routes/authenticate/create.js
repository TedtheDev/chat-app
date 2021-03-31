const DB = require('../../database/index');
const authentication = require('../../utils/authentication');
const password = require('../../utils/password');

module.exports = (req, res) => {
    const { body = {} } = req;
    const { email, password: plainTextPassword } = body;
    
    const fields = ['id', 'username', 'password', 'email'];
    DB.select('"Users"', fields, { email })
        .then((results) => {
            if(results.rowCount > 0){
                const { id, username, password: hashedPassword } = results.rows[0];
                
                return password.comparePasswords(plainTextPassword, hashedPassword )
                    .then((passwordComparisonResult) => {
                        if(passwordComparisonResult){
                            return authentication.signToken({id, username })
                        }
            
                        throw new Error('Password Comparison: password incorrect')
                    });
            } else {
                throw new Error('Database issue: cannot find results')
            }
        })
        .then((signedToken) => {
            res.cookie('chat-app-token', signedToken, { domain: 'chat-app.com', sameSite: 'Lax', httpOnly: true, secure: true })
            res.sendStatus(201);
        })
        .catch(err => {
            res.status(401).json({
                message: 'Invalid Credentials'
            });
        });
};