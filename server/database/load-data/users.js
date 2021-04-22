const faker = require('faker');
const { generatePasswordHash } = require('../../utils/password');

const users = [];

const NUMBER_OF_USERS = 3;

(async()=> {
    for(let i = 0; i < NUMBER_OF_USERS; i++){
        const user = {
            username: faker.internet.userName(),
            email: faker.internet.email(),
            password: await generatePasswordHash('test'),
        };
    
        users.push(user);
    }
})();

module.exports = users;