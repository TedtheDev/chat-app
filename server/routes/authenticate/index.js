const express = require('express');

const AuthenticateRouter = express.Router();

AuthenticateRouter.route('/create')
    .post(require('./create'));

AuthenticateRouter.route('/verify')
    .get(require('./verify'));

module.exports = AuthenticateRouter;