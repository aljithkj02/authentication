import { Request, Response } from "express";

export const signupUserJwt = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        return res.json({
            status: false,
            message: (error as Error).message
        })
    }
}