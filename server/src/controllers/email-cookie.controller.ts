import { Request, Response } from "express";
import { validateLoginBody, validateSignupBody } from "../lib/validators/signup.validator";
import { handleValidationError } from "../lib/exceptions";
import { checkUser, createUser } from "../db/crud-user";

export const signupUserCookie = async (req: Request, res: Response) => {
    try {
        const validateResult = validateSignupBody(req.body);

        if (!validateResult.success) {
            return handleValidationError(res, validateResult.error);
        }
        
        const json = await createUser(validateResult.data);
        res.cookie('access_token', json.access_token, {
            secure: false,
            httpOnly: true,
            sameSite: "none",
            maxAge: 60000
        })

        return res.json({
            status: json.status,
            message: json.message
        });
    } catch (error) {
        return res.json({
            status: false,
            message: (error as Error).message
        })
    }
}

export const loginUserCookie = async (req: Request, res: Response) => {
    try {
        const validateResult = validateLoginBody(req.body);

        if (!validateResult.success) {
            return handleValidationError(res, validateResult.error);
        }
        
        const json = await checkUser(validateResult.data);

        res.cookie('access_token', json.access_token, {
            secure: false,
            httpOnly: true,
            sameSite: "lax",
            maxAge: 60000
        })
        return res.json({
            status: json.status,
            message: json.message
        });
    } catch (error) {
        return res.json({
            status: false,
            message: (error as Error).message
        })
    }
}

export const logoutUserCookie = async (req: Request, res: Response) => {
    res.clearCookie('access_token');
    res.json({
        status: true,
        message: 'User logged out successfully!'
    })
}