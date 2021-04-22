const express = require('express');

const AccountRouter = express.Router();

AccountRouter.route('/create')
    .post(require('./create'));

module.exports = AccountRouter;