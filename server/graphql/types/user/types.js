const graphql = require('graphql');
const { getUserResolver } = require('../../resolvers/user/get-user-resolver');
const { getFriendsResolver } = require('../../resolvers/user/get-friends-resolver');

const { FriendshipListType } = require('../friendship');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        friends: FriendshipListType,
    })
});

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { 
                id: { type: GraphQLInt},
                username: { type: GraphQLString },
                password: { type: GraphQLString },
                email: { type: GraphQLString },
            },
            resolve: getUserResolver,
        }
    }
});

module.exports = {
    UserType,
    RootQueryType,
};