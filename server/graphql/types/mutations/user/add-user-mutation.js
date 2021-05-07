const { addUserResolver } = require('../../../resolvers');
const {
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');

const { UserType } = require('../../user');

module.exports = {
    type: UserType,
    args: {
        username: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: addUserResolver,
};