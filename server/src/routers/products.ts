import { Router } from "express";
import { getAllProducts } from "../controllers/products.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const productsRouter = Router();

productsRouter.get('/', authMiddleware, getAllProducts);