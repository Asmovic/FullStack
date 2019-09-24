const Passport = require('passport');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send({
            Hi: "Asmovic"
        })
    })
    app.get('/api/logout', (req, res) => {
        req.logout();
    })

    app.get('/auth/google', Passport.authenticate('google', {
        scope: ['profile', 'email']
    }))


    app.get('/auth/google/callback', Passport.authenticate('google'));
    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
}
