const { editUserResolver } = require('../../../resolvers');
const {
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt
} = require('graphql');

const { UserType } = require('../../user');

module.exports = {
    type: UserType,
    args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString },
        
    },
    resolve: editUserResolver,
};
