import { Router } from "express";
import { getAllProducts } from "../controllers/products.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

export const productsRouter = Router();
/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *       example:
 *         id: "1"
 *         title: "Product A"
 *         description: "some description"
 */

/**
 * @openapi
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags:
 *       - Products
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       401:
 *         description: Unauthorized request
 */
productsRouter.get('/', authMiddleware, getAllProducts);