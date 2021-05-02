const { deleteUserResolver } = require('../../../resolvers/user/delete-user-resolver');
const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');

module.exports = {
    type: GraphQLInt,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve: deleteUserResolver,
};