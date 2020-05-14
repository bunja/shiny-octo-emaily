const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');


const oauthOptions = {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
};

const strategy = new GoogleStrategy(oauthOptions,
    (accessToken, refreshToken, profile, done) => {
        console.log("accessToken:", accessToken);
        console.log("refreshToken:", refreshToken);
        console.log("profile:", profile);
    }
);

passport.use(strategy);