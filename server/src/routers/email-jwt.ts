import { Router } from "express";
import { signupUserJwt } from "../controllers/email-jwt.controller";

export const emailJwtRouter = Router();

emailJwtRouter.post('/signup', signupUserJwt);