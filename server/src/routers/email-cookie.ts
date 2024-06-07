import { Router } from "express";
import { loginUserCookie, logoutUserCookie, signupUserCookie } from "../controllers/email-cookie.controller";

export const emailCookieRouter = Router();

emailCookieRouter.post('/signup', signupUserCookie);
emailCookieRouter.post('/login', loginUserCookie);
emailCookieRouter.get('/logout', logoutUserCookie);