const commands = require('../commands');

jest.mock('../connection')

describe('Database CRUD Commands', () => {

    describe('SELECT', () => {

        test('select `*` from `aTable', () => {
            
            const expected = 'SELECT * FROM aTable';

            const results = commands.select('aTable', ['*']);

            expect(results).toBe(expected);
        });

        test('select customerId, customerName from `aTable`', () => {
            
            const expected = "SELECT customerId, customerName FROM aTable";

            const results = commands.select('aTable', ['customerId', 'customerName']);

            expect(results).toBe(expected);
        });

        test('select `*` from `aTable with a parameter', () => {
            
            const expected = "SELECT * FROM aTable WHERE (customerName = 'Frank')";

            const results = commands.select('aTable', ['*'], {customerName: 'Frank'});

            expect(results).toBe(expected);
        });

        test('select `*` from `aTable with multiple parameters', () => {
            
            const expected = "SELECT * FROM aTable WHERE (customerName = 'Frank') AND (phoneNumber = '123456')";

            const results = commands.select('aTable', ['*'], {customerName: 'Frank', phoneNumber: '123456'});

            expect(results).toBe(expected);
        });
        
        test('select `*` from `aTable with multiple parameters with a number and a string', () => {
            
            const expected = "SELECT * FROM aTable WHERE (customerId = 1) AND (phoneNumber = '123456')";

            const results = commands.select('aTable', ['*'], {customerId: 1, phoneNumber: '123456'});

            expect(results).toBe(expected);
        });

    })
    
    describe('INSERT', () => {

        test('INSERT into `aTable with one value and one value ', () => {
        
            const expected = "INSERT INTO aTable (field1) VALUES ('value1')";
    
            const results = commands.insert('aTable', {field1: 'value1'});
    
            expect(results).toBe(expected);
        });
        
        test('INSERT into `aTable with multiple fields and multiple values ', () => {
        
            const expected = "INSERT INTO aTable (field1, field2) VALUES ('value1', 'value2')";
    
            const results = commands.insert('aTable', {field1: 'value1', field2: 'value2'});
    
            expect(results).toBe(expected);
        });
        
        test('INSERT into `aTable with one field and one value of a string', () => {
        
            const expected = "INSERT INTO aTable (field1, field2) VALUES ('value1', 'value2')";
    
            const results = commands.insert('aTable', {field1: 'value1', field2: 'value2'});
    
            expect(results).toBe(expected);
        });
        
        test('INSERT into `aTable with one field and one value of an integer', () => {
        
            const expected = "INSERT INTO aTable (field1) VALUES (1)";
    
            const results = commands.insert('aTable', {field1: 1});
    
            expect(results).toBe(expected);
        });

    })
    
    describe('REMOVE aka DELETE', () => {

        test('DELETE FROM `aTable` with a paramters', () => {
            const expected = "DELETE FROM aTable WHERE (field1 = 'aValue')";

            const results = commands.remove('aTable', {field1: 'aValue'});

            expect(results).toBe(expected)
        })

    })
    
    describe('UPDATE', () => {

        test('UPDATE `aTable` with a field with a value', () => {
            const expected = "UPDATE aTable SET field1 = 'newValue' WHERE (field1 = 'oldValue')";

            const results = commands.update('aTable', {field1: 'newValue'}, {field1: 'oldValue'})

            expect(results).toBe(expected);
        })

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