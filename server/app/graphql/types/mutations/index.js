const { GraphQLObjectType } = require('graphql');

// user mutations
const addUserMutation = require('./user/add-user-mutation');
const editUserMutation = require('./user/edit-user-mutation');
const deleteUserMutation = require('./user/delete-user-mutation');
const searchUserMutation = require('./user/search-user-mutation');

// friendship mutations
const addFriendshipMutation = require('./friendship/add-friendship-mutation');
const editFriendshipMutation = require('./friendship/edit-friendship-mutation');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: addUserMutation,
        editUser: editUserMutation,
        deleteUser: deleteUserMutation,
        addFriendship: addFriendshipMutation,
        searchUser: searchUserMutation,
        editFriendship: editFriendshipMutation,
    }
});

module.exports = {
    mutation,
}