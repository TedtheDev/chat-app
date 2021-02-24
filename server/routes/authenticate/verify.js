const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    const { body = {} } = req;
    const { token } = body;
    
    if(token){
        // userId
        jwt.verify(token, process.env.TOKEN_SECRET, function(error, decodedToken) {
            if(error){
                res.status(401).json({
                    error,
                    message: 'Unable to verify token',
                })
            }

            res.status(200).json(decodedToken)
        });
    } else {
        res.status(401).json({
            message: 'Invalid Token'
        })
    }
};