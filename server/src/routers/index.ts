import { Router } from "express";
import { emailJwtRouter } from "./email-jwt";
import { productsRouter } from "./products";

export const allRoutes = Router();

allRoutes.use('/email-jwt', emailJwtRouter);
allRoutes.use('/products', productsRouter)