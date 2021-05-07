const { GraphQLSchema } = require('graphql');

const RootQueryType = require('./types/root');
const { mutation } = require('./types/mutations');

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation,
});

module.exports = schema;