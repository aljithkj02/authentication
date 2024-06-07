import { Router } from "express";
import { emailJwtRouter } from "./email-jwt";

export const allRoutes = Router();

allRoutes.use('/email-jwt', emailJwtRouter);