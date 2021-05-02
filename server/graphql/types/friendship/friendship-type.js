const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} = require('graphql');

const FriendshipType = new GraphQLObjectType({
    name: 'Friendship',
    fields: () => ({
        requesterId: { type: GraphQLInt },
        addresseeId: { type:  GraphQLInt },
        status: { type: GraphQLString },
    })
});

module.exports = FriendshipType;
