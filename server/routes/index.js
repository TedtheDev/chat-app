module.exports = (app) => {
    app.use('/v1/authenticate', require('./authenticate'));
    app.use('/v1/account', require('./account'));
};