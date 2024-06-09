import {Strategy} from 'passport-github'
import passport from 'passport'
import { VerifyCallback } from 'passport-google-oauth2'

passport.use(new Strategy({
    clientID: process.env.GITHUB_CLIENT_ID || '',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    callbackURL: "http://localhost:8000/auth/github/callback"
}, (accessToken: string, refreshToken: string, profile: Strategy.Profile, cb: VerifyCallback) => {
    cb(null, profile)
}))