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
        users
        messages {
            message {
                timestamp
                user
                messageText
            }
        }
    }
}

user table
- id
- username
- email
- password

message table
- id
- group
- sender
- receiver
- messageText
- timestamp

friends table
- userId (id)
- friendId (userId)

friends table
user1 user2
user1 user3
user2 user1
user3 user1
user3 user4
user4 user3

user to messages transaction table
group 1 user1 user2 message1 timestamp
group 1 user2 user1 message1 timestamp
group2 user1 user2 message1 timestamp
group2 user1 user3 message1 timestamp
group2 user3 user1 message1 timestamp
group2 user3 user2 message1 timestamp

message
messageid receiver
message1 user1
message1 user2



User 0 - + Friends                GroupChat 0 - + Messages
User 0 - + Messages               Message 1 - 1 User
User 0 - + Group Chats            Message 1 - 1 Group Chat

                                                                  
                                   Friend
                                     +                              
                                     0                       
                    Group Chat + 0  User                              
                                     0                   
                                     +
                                  Message
                                     


Phase 0
- figure out database model
- figure out graphql schema
- figure out graphql pattern normal graphql OR graphql tools
- figure out page layouts/patterns

Phase 1 Account/Profile Feature
Create User
- create account
Edit User Info
- edit user info page
- edit user api
Delete Account
- delete button
- delete account api

Phase 2.a Friends Feature - searching/adding friend
- searching a friend
- add a friend
Phase 2.b Friends Feature - messages
- start chat
- send/receive messages

Phase 3
- group chats

Main Feature
- language interpration

Additional Features
- image links in chat
- store avatars/pictures
- audio
- video
