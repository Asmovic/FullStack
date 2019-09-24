const Passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users')

Passport.serializeUser((user, done) => {
    done(null, user.id)
});
Passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

//Passport Strategy
Passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then(existingUser => {
            if (existingUser) {
                //User exist
                done(null, existingUser)
            } else {
                //New user
                new User({ googleId: profile.id }).save()
                    .then(user => {
                        done(null, user)
                    })

            }
        })


}));