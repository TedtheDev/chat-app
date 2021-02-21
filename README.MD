# Chat App

# Data Model [WIP]
User {
    name
    email,
    messages {
            message {
                timestamp
                user
                messageText
            }
    }
    friends{
        users
    }
    groupChats: {
        friends:
    }
}

user table
message table
friends table
