const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    const { body = {} } = req;
    const { email, password } = body;
    
    if(email === 'myemail@email.com' && password === 'mypass'){
        // userId
        jwt.sign({ email }, process.env.TOKEN_SECRET, function(error, token) {
            if(error){
                res.status(401).json({
                    message: 'Unable to sign token',
                })
            }

            res.cookie('chat-app-token', token, { domain: 'chat-app.com', sameSite: 'Lax', httpOnly: true, secure: true })
            res.sendStatus(201);
        });
    } else {
        res.status(401).json({
            message: 'Invalid Credentials'
        })
    }
};