const { mergeTypeDefs  } = require('graphql-tools');
const User = require('./user/graphql-tools-types');

const typeDefs = [User];

module.exports = mergeTypeDefs(typeDefs, { all: true });