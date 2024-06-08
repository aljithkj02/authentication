import { Strategy } from 'passport-google-oauth2'
import passport from 'passport'

passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: "http://localhost:8000/api/auth/google/callback",
    passReqToCallback: true
}, (request, accessToken, refreshToken, profile, done) => {
    console.log("hello google")
    return done(null, { name: 'Jithu'})
}))
