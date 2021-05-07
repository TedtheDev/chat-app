const { searchUserResolver } = require('../../../resolvers');

const {
    GraphQLString,
    GraphQLList,
} = require('graphql');

const { UserType } = require('../../user');

module.exports = {
    type: new GraphQLList(UserType),
    args: {
        searchValue: { type: GraphQLString },
    },
    resolve: searchUserResolver,
};
