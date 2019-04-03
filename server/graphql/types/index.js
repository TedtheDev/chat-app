const { mergeTypes } = require('merge-graphql-schemas');
const User = require('./user/index');
const Error = require('./error/index');

const typeDefs = [User, Error];

module.exports = mergeTypes(typeDefs, { all: true });