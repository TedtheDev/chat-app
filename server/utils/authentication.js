const jwt = require('jsonwebtoken');

const signToken = async (info) => {
    return new Promise((resolve, reject) => {
        if(typeof info !== 'object') {
            reject('parameter info is not of type object');
        }
        jwt.sign(info, process.env.TOKEN_SECRET, (err, token) => {
            if(err) reject('Error in signToken: cannot sign a token');
            resolve({ token });
        });
    });
}

const verifyToken = async (token) => {
    return new Promise((resolve, reject) => {
        if(typeof token !== 'string') reject('parameter token is not of type string');
        jwt.verify(token, process.env.TOKEN_SECRET, function(err) {
            if(err) reject({err, message: 'Error in verifyToken: token can not be verified'})
            resolve({success: true, message: 'User verified'});
        });
    })
}

const authentication = {
    signToken: signToken,
    verifyToken: verifyToken
}

module.exports = authentication;