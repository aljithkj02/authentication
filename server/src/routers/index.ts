import { Router } from "express";
import { emailJwtRouter } from "./email-jwt";
import { productsRouter } from "./products";
import { emailCookieRouter } from "./email-cookie";

export const allRoutes = Router();

allRoutes.use('/email-jwt', emailJwtRouter);
allRoutes.use('/email-cookie', emailCookieRouter);
allRoutes.use('/products', productsRouter)