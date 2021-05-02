const { GraphQLObjectType } = require('graphql');

const addUserMutation = require('./user/add-user-mutation');
const editUserMutation = require('./user/edit-user-mutation');
const deleteUserMutation = require('./user/delete-user-mutation');
const addFriendshipMutation = require('./friendship/add-friendship-mutation');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: addUserMutation,
        editUser: editUserMutation,
        deleteUser: deleteUserMutation,
        addFriendship: addFriendshipMutation
    }
});

module.exports = {
    mutation,
}