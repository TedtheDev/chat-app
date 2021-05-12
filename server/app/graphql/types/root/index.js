const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const { UserType } = require('../user');

const { getUserResolver } = require('../../resolvers');

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

module.exports = RootQueryType;