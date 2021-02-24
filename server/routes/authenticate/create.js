const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    const { body = {} } = req;
    const { email, password } = body;
    
    if(email === 'myemail@email.com' && password === 'mypass'){
        // userId
        jwt.sign({ email }, process.env.TOKEN_SECRET, function(error, token) {
            if(error){
                res.status(401).json({
                    error,
                    message: 'Unable to sign token',
                })
            }

            res.status(201).json({
                token,
            })
        });
    } else {
        res.status(401).json({
            message: 'Invalid Credentials'
        })
    }
};