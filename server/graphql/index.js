const { makeExecutableSchema } = require('graphql-tools');
const { GraphQLSchema } = require('graphql');

const typeDefs = require('./types/index');
const resolvers = require('./resolvers/index');
const { RootQueryType } = require('./types/user/types');

const graphQLToolsSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

const schema = new GraphQLSchema({
    query: RootQueryType
});

module.exports = {
    graphQLToolsSchema,
    schema,
}