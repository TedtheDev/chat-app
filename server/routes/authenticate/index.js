const express = require('express');

const AuthenticateRouter = express.Router();

AuthenticateRouter.route('/create')
    .post(require('./create'));

AuthenticateRouter.route('/verify')
    .post(require('./verify'));

module.exports = AuthenticateRouter;