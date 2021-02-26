const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    const { 'chat-app-token': chatAppToken } = req.cookies
    
    if(chatAppToken){
        jwt.verify(chatAppToken, process.env.TOKEN_SECRET, function(error, decodedToken) {
            if(error){
                res.status(401).json({
                    message: 'Unable to verify token',
                })
            }

            const { iat, ...userDetails } = decodedToken;
            res.status(200).json({ userDetails })
        });
    } else {
        res.status(401).json({
            message: 'Invalid Token'
        })
    }
};