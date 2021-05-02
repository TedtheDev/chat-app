const { GraphQLList } = require('graphql');
const { getFriendsResolver } = require('../../resolvers/user/get-friends-resolver');

const FriendshipType = require('./friendship-type');

const FriendshipListType = {
    type: new GraphQLList(FriendshipType),
    resolve: getFriendsResolver,
};

module.exports = FriendshipListType;