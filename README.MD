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
                timestamp♠
                user
                messageText
            }
        }
    }
}

user table (composite key - username and email unless don't allow same usernames)
- id
- username k
- email k
- password
- createDateTime

friendship table (composite key requesterId and addresseeId )
- requesterId (userId) k
- addresseeId (userId) k

friendshipStatus table
- requesterId (userId) k
- addresseeId (userId) k
- specifiedDateTime (DATEIMT) k
- statusCode
- specifierId (userId taking the action)

friendshipStatusCode
- statusCode
- name

message table
- id 
- creator_id:
- message_body
- created_date
- parent_message_id

message recipient table
- <UPDATE>

user group table
- <UPDATE>

group table
- <UPDATE>

friendsship table
user1 user2
user1 user3
user2 user1
user3 user1
user3 user4
user4 user3

friendshipStatus Table
user1 user2 1-01-2021 R user1
user1 user2 1-02-2021 A user2
user1 user2 1-04-2021 B user1
user1 user2 1-10-2021 R user2
user1 user2 1-11-2021 A user1

friendShipStatusCode Table♣
R Requested
A Accepted
B Blocked
D Declined

message
messageid receiver
message1 user1
message1 user2
                                     
GraphQL queries/mutations
- Queries
- - user
- - users
- - messages
- - friendships
- Mutations
- - adduser - check
- - editUser - check
- - deleteUser - check
- - createFriendship
- - editFriendship
- - deleteFriendship
- - addMessage
- - editMessage???
- - deleteMessage
- - 
Phase 0
- figure out database model - add user groups to database schema
- update models to use camelCase, set field to camelCase and then set field attribute on field to database field, set model underscored: true https://stackoverflow.com/questions/18858337/sequelize-use-camel-case-in-js-but-underscores-in-table-names
- use updated sequelize syntax
- figure out graphql schema
- figure out graphql pattern normal graphql OR graphql tools - COMPLETE
- figure out page layouts/patterns

Phase 1 Account/Profile Feature
Login User - DONE
Logout User
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


tech debt
- rip out graphql tools
- clean up sequelize models
- - primary key or unique key issues
- - add underscore fields? is it useful?
- - add associations