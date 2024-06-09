import { Strategy, VerifyCallback } from 'passport-google-oauth2'
import passport from 'passport'
import { AuthType, User } from '@prisma/client'
import { Request } from 'express'

passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: "http://localhost:8000/api/auth/google/callback",
    passReqToCallback: true
}, (req: Request, accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => {
    let userObj = {
        name: profile.displayName,
        email: profile.email,
        authType: AuthType.GOOGLE
  }

    return done(null, userObj)
}))

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user: User, done) => {
    done(null, user);
})