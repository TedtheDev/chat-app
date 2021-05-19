const messageRecipients = [
    {
        recipientId: 2,
        recipientGroupId: null,
        messageId: 1,
        isRead: true
    },
    {
        recipientId: 1,
        recipientGroupId: null,
        messageId: 2,
        isRead: true
    },
    {
        recipientId: 1,
        recipientGroupId: null,
        messageId: 3,
        isRead: true
    },
    {
        recipientId: 2,
        recipientGroupId: null,
        messageId: 4,
        isRead: false
    },
    // group messages
    {
        recipientId: 1,
        recipientGroupId: 1,
        messageId: 5,
        isRead: false
    },
    {
        recipientId: 2,
        recipientGroupId: 1,
        messageId: 6,
        isRead: false
    },
    {
        recipientId: 3,
        recipientGroupId: 1,
        messageId: 7,
        isRead: false
    },
]

module.exports = messageRecipients;