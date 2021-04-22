const faker = require('faker');

const messages = [
    {
        creator_id: 1,
        message_body: faker.lorem.words(),
        created_date: faker.date.past(),
        parent_message_id: null
    },
    {
        creator_id: 2,
        message_body: faker.lorem.words(),
        created_date: faker.date.past(),
        parent_message_id: null
    },
    {
        creator_id: 2,
        message_body: faker.lorem.words(),
        created_date: faker.date.past(),
        parent_message_id: null
    },
    {
        creator_id: 1,
        message_body: faker.lorem.words(),
        created_date: faker.date.past(),
        parent_message_id: null
    }
]

module.exports = messages;