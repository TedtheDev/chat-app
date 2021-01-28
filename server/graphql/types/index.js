const { mergeTypeDefs  } = require('graphql-tools');
const User = require('./user/index');
const Error = require('./error/index');

const typeDefs = [User, Error];

module.exports = mergeTypeDefs(typeDefs, { all: true });