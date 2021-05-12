// User Resolvers
const addUserResolver = require('./user/add-user-resolver');
const deleteUserResolver = require('./user/delete-user-resolver');
const editUserResolver = require('./user/edit-user-resolver');
const getFriendsResolver = require('./user/get-friends-resolver');
const getUserResolver = require('./user/get-user-resolver');
const searchUserResolver = require('./user/search-user-resolver');

// Friendship Resolvers
const addFriendship = require('./friendship/add-friendship-resolver');

module.exports = {
    addUserResolver,
    deleteUserResolver,
    editUserResolver,
    getFriendsResolver,
    getUserResolver,
    searchUserResolver,
    addFriendship,
};