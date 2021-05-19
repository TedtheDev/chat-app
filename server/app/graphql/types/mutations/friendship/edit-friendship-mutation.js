const { editFriendshipResolver } = require('../../../resolvers');
const {
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');

const { UserType } = require('../../user');

module.exports = {
    type: UserType,
    args: {
        requesterId: { type: new GraphQLNonNull(GraphQLInt) },
        addresseeId: { type: new GraphQLNonNull(GraphQLInt) },
        statusCode: { type: new GraphQLNonNull(GraphQLString) },
        actionUserId: { type: new GraphQLNonNull(GraphQLInt) }, // specifierId
    },
    resolve: editFriendshipResolver,
};