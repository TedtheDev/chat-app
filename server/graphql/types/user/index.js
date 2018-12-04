module.exports = `
    type User {
        id: String
        username: String
        email: String
    }

    type Query {
        user(id: String, username: String, email: String): User
        users: [User]
    }

    type Mutation {
        addUser(id: String!, username: String!, email: String!): User
        editUser(id: String, username: String, email: String): User
        deleteUser(id: String, username: String, email: String): User
    }
`;