import {Strategy} from 'passport-github'
import passport from 'passport'
import { VerifyCallback } from 'passport-google-oauth2'
import { AuthType } from '@prisma/client'

passport.use(new Strategy({
    clientID: process.env.GITHUB_CLIENT_ID || '',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    callbackURL: "http://localhost:8000/api/auth/github/callback",
}, (_accessToken: string, _refreshToken: string, _params: any, profile: Strategy.Profile | any, done: VerifyCallback) => {
    let userObj = {
        name: profile.username,
        email: profile._json?.email,
        authType: AuthType.GITHUB
    }
    return done(null, userObj)
}))