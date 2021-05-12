const UserSchema = require('./user');

const FriendshipSchema = require('./friendship');
const FriendshipStatusSchema = require('./friendship-status');
const FriendshipStatusCodeSchema = require('./friendship-status-code');

const MessageSchema = require('./message');
const MessageRecipientSchema = require('./message-recipient');

module.exports = {
    UserSchema,
    FriendshipSchema,
    FriendshipStatusSchema,
    FriendshipStatusCodeSchema,
    MessageSchema,
    MessageRecipientSchema,
}