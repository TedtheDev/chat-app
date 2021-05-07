const { deleteUserResolver } = require('../../../resolvers');
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