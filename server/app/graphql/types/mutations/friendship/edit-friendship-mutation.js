const { editFriendshipResolver } = require('../../../resolvers');
const {
    GraphQLInt,
    GraphQLNonNull,
} = require('graphql');

const { UserType } = require('../../user');

module.exports = {
    type: UserType,
    args: {
        requesterId: { type: new GraphQLNonNull(GraphQLInt) },
        addresseeId: { type: new GraphQLNonNull(GraphQLInt) },
        actionUserId: { type: new GraphQLNonNull(GraphQLInt) }, // specifierId
    },
    resolve: editFriendshipResolver,
};