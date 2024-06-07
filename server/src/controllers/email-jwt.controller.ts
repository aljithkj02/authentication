import { Request, Response } from "express";
import { validateSignupBody } from "../lib/validators/signup.validator";
import { handleValidationError } from "../lib/exceptions";

export const signupUserJwt = async (req: Request, res: Response) => {
    try {
        const validateResult = validateSignupBody(req.body);

        if (!validateResult.success) {
            return handleValidationError(res, validateResult.error);
        }
        
        return res.json({
            status: true,
            message: 'Signed up successfully!',
            access_token: ''
        })
    } catch (error) {
        return res.json({
            status: false,
            message: (error as Error).message
        })
    }
}