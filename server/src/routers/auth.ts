import { User } from "@prisma/client";
import { Router } from "express";
import passport from "passport";
import { handleUserData } from "../controllers/sso.controller";
import { SSCInputType } from "../lib/types/ssc.handler.type";

export const authRouter = Router();

authRouter.get('/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

authRouter.get( '/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: 'http://localhost:5173/',
        // successRedirect: 'http://localhost:5173/'
    }),
    async (req, res) => {
        console.log(req.user)
        const response = await handleUserData(req.user as SSCInputType);
        // res.send('Success!')
        res.redirect('http://localhost:5173/home');
    }
);

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user: User, done) => {
    done(null, user);
})