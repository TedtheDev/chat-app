module.exports = `
    type User {
        id: String
        username: String
        password: String
        email: String
    }

    type Query {
        users(id: String, username: String, password: String, email: String): [User]
        authenticate(email: String!, password: String!): String
    }

    type Mutation {
        addUser(username: String!, password: String!, email: String!): User
        editUser(id: String!, username: String, password: String, email: String): User
        deleteUser(id: String!): User
    }
`;