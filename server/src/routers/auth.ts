import { User } from "@prisma/client";
import { Router } from "express";
import passport from "passport";
import { handleUserData, validateAndHandleToken } from "../controllers/sso.controller";
import { SSCInputType } from "../lib/types/ssc.handler.type";

export const authRouter = Router();

// GOOGLE 
authRouter.get('/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

authRouter.get( '/google/callback',
    passport.authenticate( 'google', {
        failureRedirect: 'http://localhost:5173/',
    }),
    async (req, res) => {
        const response = await handleUserData(req.user as SSCInputType);
        res.redirect(`http://localhost:5173/auth/google?access_token=${response.access_token}`);
    }
);

authRouter.get('/google/get-token', async (req, res) => {
    try {
        const access_token = req.query.access_token;
        if (!access_token) {
            return res.json({
                status: false,
                message: 'No access token provided!'
            })
        }

        const json = await validateAndHandleToken(access_token as string);

        if (!json.status) {
            return res.json(json);
        }

        res.cookie('access_token', json?.access_token || '', {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 30000
        })

        res.json({
            status: true,
            message: "Verification successful!"
        })

    } catch (error) {
        return res.json({
            status: false,
            message: (error as Error).message
        })
    }
})

// GITHUB 
authRouter.get('/github', [passport.authenticate('github')]);

authRouter.get('/github/callback', passport.authenticate('github', {
    failureRedirect: "http://localhost:5173"
}), (req, res) => {
    console.log(req.user);
    res.redirect('http://localhost:5173/home');
})