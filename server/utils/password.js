const bcrypt = require('bcryptjs');

const generatePasswordHash = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, function(err, salt) {
            if(err) reject(err);
            bcrypt.hash(password, salt, function(err, hash) {
                if(err) reject(err);
                resolve(hash);
            });
        });
    });
}

const comparePasswords = (password, hash) => {
    return bcrypt.compare(password, hash)
}

module.exports = {
    generatePasswordHash: generatePasswordHash,
    comparePasswords: comparePasswords
}