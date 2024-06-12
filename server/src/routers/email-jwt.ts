import { Router } from "express";
import { loginUserJwt, signupUserJwt } from "../controllers/email-jwt.controller";

export const emailJwtRouter = Router();



/**
 * @openapi
 * /api/email-jwt/signup:
 *   post:
 *     summary: Signup User
 *     tags: 
 *       - Auth-Email-JWT
 *     requestBody: 
 *       description: User credentials to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *           example:
 *             name: "Krishna"
 *             email: "krishna@gmail.com"
 *             password: "krishna123"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       401:
 *         description: Unauthorized request
 */

emailJwtRouter.post('/signup', signupUserJwt);

/**
 * @openapi
 * /api/email-jwt/login:
 *   post:
 *     summary: Login User
 *     tags:
 *       - Auth-Email-JWT
 *     requestBody:
 *       description: User credentials to be added
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *           example:
 *             email: "krishna@gmail.com"
 *             password: "krishna123"
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       401:
 *         description: Unauthorized request
 */

emailJwtRouter.post('/login', loginUserJwt);