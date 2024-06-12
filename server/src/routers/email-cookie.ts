import { Router } from "express";
import { loginUserCookie, logoutUserCookie, signupUserCookie } from "../controllers/email-cookie.controller";

export const emailCookieRouter = Router();

/**
 * @openapi
 * /api/email-cookie/signup:
 *   post:
 *     summary: Signup User
 *     tags: 
 *       - Auth-Email-COOKIE
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
emailCookieRouter.post('/signup', signupUserCookie);

/**
 * @openapi
 * /api/email-cookie/login:
 *   post:
 *     summary: Login User
 *     tags: 
 *       - Auth-Email-COOKIE
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
emailCookieRouter.post('/login', loginUserCookie);
emailCookieRouter.get('/logout', logoutUserCookie);