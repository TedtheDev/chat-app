const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList
} = graphql;

const resolvers = require('../../resolvers');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        friends:{
            type: new GraphQLList(UserType),
            resolve: resolvers.getFriendsResolver,
        },
    })
});

module.exports = UserType;