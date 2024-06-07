import { Request, Response } from "express";
import { validateLoginBody, validateSignupBody } from "../lib/validators/signup.validator";
import { handleValidationError } from "../lib/exceptions";
import { checkUser, createUser } from "../db/crud-user";

export const signupUserJwt = async (req: Request, res: Response) => {
    try {
        const validateResult = validateSignupBody(req.body);

        if (!validateResult.success) {
            return handleValidationError(res, validateResult.error);
        }
        
        const json = await createUser(validateResult.data);
        return res.json(json);
    } catch (error) {
        return res.json({
            status: false,
            message: (error as Error).message
        })
    }
}

export const loginUserJwt = async (req: Request, res: Response) => {
    try {
        const validateResult = validateLoginBody(req.body);

        if (!validateResult.success) {
            return handleValidationError(res, validateResult.error);
        }
        
        const json = await checkUser(validateResult.data);
        return res.json(json);
    } catch (error) {
        return res.json({
            status: false,
            message: (error as Error).message
        })
    }
}