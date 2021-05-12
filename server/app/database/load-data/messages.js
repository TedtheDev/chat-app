const faker = require('faker');

const messages = [
    {
        creatorId: 1,
        messageBody: faker.lorem.words(),
        createdDate: faker.date.past(),
        parentMessageId: null
    },
    {
        creatorId: 2,
        messageBody: faker.lorem.words(),
        createdDate: faker.date.past(),
        parentMessageId: null
    },
    {
        creatorId: 2,
        messageBody: faker.lorem.words(),
        createdDate: faker.date.past(),
        parentMessageId: null
    },
    {
        creatorId: 1,
        messageBody: faker.lorem.words(),
        createdDate: faker.date.past(),
        parentMessageId: null
    }
]

module.exports = messages;