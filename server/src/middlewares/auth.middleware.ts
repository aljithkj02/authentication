import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../lib/jwt";
import { prisma } from "../db";
import { ExpressRequest } from "../lib/types/custom-types";

export const authMiddleware = async (req: ExpressRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ').pop();

        const jsonResponse = {
            status: false,
            message: 'Unauthorized User!'
        }

        if (!token) {
            return res.status(401).json(jsonResponse);
        }

        const tokenData = verifyToken('token')

        if (!tokenData.status) {
            return res.status(401).json(jsonResponse);
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
        return res.status(401).json({
            status: false,
            message: (error as Error).message
        })
    }
}