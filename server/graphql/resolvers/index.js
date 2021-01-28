const { mergeResolvers } =  require("merge-graphql-schemas");

const User = require("./user/index");

const resolvers = [User];

module.exports = mergeResolvers(resolvers);