const DB = require('../../../database/index');
const { generatePasswordHash, comparePasswords } = require('../../../utils/password');

module.exports =  {
  Query: {
    user: (root, args) => {
        const fields = ['id', 'username', 'password', 'email'];
        return DB.select(fields, 'users', args)
            .then((results) => {
                return results.rows;
            })
            .catch(err => err);
    },
    users: () => {
        return DB.select(['id', 'username', 'email'], 'users')
            .then((results) => {
                return results.rows
            })
            .catch(err => err);
    }
  },
  Mutation: { // aaddUser(id: String!, username: String!, password: String!, email: String!): User
    addUser: (root, {username, password, email}) => {
        return generatePasswordHash(password)
            .then((passwordHash) => {
                return DB.insert(
                        'users',
                        ['username', 'password', 'email' ],
                        [username, passwordHash, email]
                    )
                    .then(() => {
                        return "User added";
                    })
            })
            .catch((err) => err);
    }
  }
};