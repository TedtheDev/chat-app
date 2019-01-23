module.exports = `
    type User {
        id: String
        username: String
        password: String
        email: String
    }

    type Query {
        user(id: String, username: String, email: String): [User]
        users: [User]
    }

    type Mutation {
        addUser(username: String!, password: String!, email: String!): String
        editUser(id: String!, username: String, password: String, email: String): String
        deleteUser(id: String!): String
    }
`;