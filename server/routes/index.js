module.exports = (app) => {
    app.use('/v1/authenticate', require('./authenticate'));
};