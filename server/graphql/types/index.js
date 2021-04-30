const { mergeTypeDefs  } = require('graphql-tools');
const User = require('./user/index');

const typeDefs = [User];

module.exports = mergeTypeDefs(typeDefs, { all: true });