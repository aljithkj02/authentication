import { Router } from "express";
import { loginUserJwt, signupUserJwt } from "../controllers/email-jwt.controller";

export const emailJwtRouter = Router();

emailJwtRouter.post('/signup', signupUserJwt);
emailJwtRouter.post('/login', loginUserJwt);