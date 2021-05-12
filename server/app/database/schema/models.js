const UserSchema = require('./user');

const FriendshipSchema = require('./friendship');
const FriendshipStatusSchema = require('./friendship-status');
const FriendshipStatusCodeSchema = require('./friendship-status-code');

const MessageSchema = require('./message');
const MessageRecipientSchema = require('./message-recipient');

const UserGroupSchema = require('./user-group');
const GroupSchema = require('./group');

module.exports = {
    UserSchema,
    FriendshipSchema,
    FriendshipStatusSchema,
    FriendshipStatusCodeSchema,
    MessageSchema,
    MessageRecipientSchema,
    UserGroupSchema,
    GroupSchema,
}