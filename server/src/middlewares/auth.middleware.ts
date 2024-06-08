import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../lib/jwt";
import { prisma } from "../db";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let token = req.headers.authorization?.split(' ').pop();
        if (token === 'Bearer') {
            token = req.cookies.access_token;
        }

        const jsonResponse = {
            status: false,
            message: 'Unauthorized User!'
        }

        if (!token) {
            return res.status(401).json(jsonResponse);
        }

        const tokenData = verifyToken(token)
        
        if (!tokenData.status) {
            return res.status(401).json(tokenData);
        }

        const user = await prisma.user.findUnique({
            where: { id: tokenData.data?.id}
        })

        if (!user) {
            return res.status(401).json(jsonResponse);
        }

        req['user'] = user;
        next();
    } catch (error) {
        next(error);
        return res.status(401).json({
            status: false,
            message: (error as Error).message
        })
    }
}