const commands = require('../commands');

describe('Database CRUD Commands', () => {

    test('hello world', () => {
        expect('hello world').toMatch('hello world')
    })
    
})

/**
 * Test these commands

Database.insert(['id', 'username', 'password', 'email'], ['1', 'Ted', 'supersecret', 'someEmail@email.com'], 'users')
.then(response => {
    console.log(response)
})
.catch(err => console.log(err));

Database.select(['*'], 'users', {email: 'email@email.com'})
.then(response => {
    console.log(response)
})
.catch( err => console.log( err ));

Database.remove('users', { id: '1', email: 'someEmail@email.com'})
.then(response => {
console.log(response);
})
.catch(err => console.log(err));

Database.update('users', {username: 'TedtheDev'}, {email: 'email@email.com'})
.then(response => {
    console.log(response);
})
.catch(err => console.log(err))
*/