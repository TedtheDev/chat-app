const { mergeTypes } = require('merge-graphql-schemas');
const User = require('./user/index');

const typeDefs = [User];

module.exports = mergeTypes(typeDefs, { all: true });