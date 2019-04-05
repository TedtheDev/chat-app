const DB = require('../../../database/index');
const { generatePasswordHash, comparePasswords } = require('../../../utils/password');
const authentication = require('../../../utils/authentication');

module.exports =  {
  Query: {
    users: async (root, args = {}, context) => {
        const token = context.headers.authorization.split('Bearer: ')[1];
        console.log(token)
        return authentication.verifyToken(token)
            .then((results) => {
                if(results.success) {
                    const fields = ['id', 'username', 'password', 'email'];
                    return DB.select( '"Users"', fields, args)
                        .then((results) => {
                            console.log(results.rows)
                            return results.rows;
                        })
                        .catch(err => err);
                }

                return [];
            })
            .catch(err => err)
    },
    authenticate: (root, {email, password}, context) => {
        return DB.select( '"Users"', ['username','password','email'], { email })
            .then((results) => {
                if(results.rowCount == 1){
                    const user = results.rows[0];
                    return comparePasswords(password, user.password)
                        .then((match) => {
                            if(match){
                                return authentication.signToken(user)
                                .then((results) => {
                                    return results.token;
                                })
                                .catch(err => err)
                            }
                        })
                        .catch( err => err )
                }
            })
            .catch( err => err)
    }
  },
  Mutation: { // aaddUser(id: String!, username: String!, password: String!, email: String!): User
    addUser: (root, {username, password, email}) => {
        return generatePasswordHash(password)
            .then((passwordHash) => {
                return DB.insert(
                        '"Users"',
                        { username, password: passwordHash, email }
                    )
                    .then((results) => {
                        if(results.rowCount === 1) {
                            return DB.select('"Users"', ['id', 'username', 'email'], {username, email});
                        }
                        return "User not added";
                    })
                    .then((results) => {
                        const user = results.rows[0];
                        return authentication.signToken(user)
                            .then((results) => {
                                return results.token;
                            })
                            .catch(err => err)
                    })
            })
            .catch((err) => err);
    },
    editUser: (root, {id, ...args}) => {
        console.log(args)
        return DB.update(
            'users',
            {...args},
            {id}
        )
        .then((results) => {
            return results;
        })
    },
    deleteUser: (root, {id}) => {
        return DB.remove('users', {id})
            .then(()=> {
                return `User with id: ${id} was deleted.`
            })
    }
  }
};