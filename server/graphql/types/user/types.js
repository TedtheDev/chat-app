const graphql = require('graphql');
const { getUserResolver } = require('../../resolvers/user/get-user');
const { getFriendsResolver } = require('../../resolvers/user/get-friends');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        friends: {
            type: new GraphQLList(UserType),
            resolve: getFriendsResolver,
        }
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
    RootQueryType
};