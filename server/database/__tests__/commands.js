const commands = require('../commands');

jest.mock('../connection')

describe('Database CRUD Commands', () => {

    test('hello world', () => {
        expect('hello world').toMatch('hello world')
    });

    test('select `*` from `aTable', () => {
        
        const expected = 'SELECT * FROM aTable';

        const results = commands.select(['*'], 'aTable');

        expect(results).toBe(expected);
    });

    test('select customerId, customerName from `aTable`', () => {
        
        const expected = "SELECT customerId, customerName FROM aTable";

        const results = commands.select(['customerId', 'customerName'], 'aTable');

        expect(results).toBe(expected);
    });

    test('select `*` from `aTable with a parameter', () => {
        
        const expected = "SELECT * FROM aTable WHERE customerName = 'Frank'";

        const results = commands.select(['*'], 'aTable', {customerName: 'Frank'});

        expect(results).toBe(expected);
    });

    test('select `*` from `aTable with multiple parameters', () => {
        
        const expected = "SELECT * FROM aTable WHERE customerName = 'Frank' AND phoneNumber = '123456'";

        const results = commands.select(['*'], 'aTable', {customerName: 'Frank', phoneNumber: '123456'});

        expect(results).toBe(expected);
    });
    
    test('select `*` from `aTable with multiple parameters with a number and a string', () => {
        
        const expected = "SELECT * FROM aTable WHERE customerId = 1 AND phoneNumber = '123456'";

        const results = commands.select(['*'], 'aTable', {customerId: 1, phoneNumber: '123456'});

        expect(results).toBe(expected);
    });


    
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