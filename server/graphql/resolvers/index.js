const DB = require('../../database/index');

module.exports =  {
  Query: {
    user: (root, args) => {
        console.log('args',{args})
        const fields = ['id', 'username', 'email']
        return DB.select(fields, 'users', args)
            .then((results) => {
                return results.rows[0];
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
  }
};