import { Request, Response } from "express";
import { prisma } from "../db";

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await prisma.product.findMany();
        
        return res.json({
            status: true,
            data: products
        });
    } catch (error) {
        return res.json({
            status: false,
            message: (error as Error).message
        })
    }
}