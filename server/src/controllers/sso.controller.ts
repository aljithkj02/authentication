import { AuthType } from "@prisma/client";
import { prisma } from "../db";
import { SSCInputType } from "../lib/types/ssc.handler.type";
import { generateToken, verifyToken } from "../lib/jwt";
import { JwtPayload } from "jsonwebtoken";

export const handleUserData = async ({name, email, authType}: SSCInputType) => {
    try {
        let user = await prisma.user.findFirst({
            where: { email, authType: AuthType.GOOGLE }
        })

        if (!user) {
            user = await prisma.user.create({
                data: {
                    name,
                    email,
                    authType: AuthType.GOOGLE
                }
            })
        }

        const token = generateToken({ id: user.id, name: user.name });
        return {
            status: true,
            message: 'Signin Successful!',
            access_token: token
        }
    } catch (error) {
        return {
            status: false,
            message: (error as Error).message
        }
    }
}

export const validateAndHandleToken = async (token: string): Promise<{
    status: boolean,
    message?: string;
    data?: (JwtPayload & {id: number}) | undefined,
    access_token?: string;
}> => {
    try {

        const isValidToken = verifyToken(token);

        if (!isValidToken.status) {
            return isValidToken;
        }
        
        let user = await prisma.user.findUnique({
            where: { id: isValidToken?.data?.id, authType: 'GOOGLE'}
        })

        if (!user) {
            return {
                status: false,
                message: 'No such user exist'
            }
        }

        const access_token = generateToken({ id: user.id, name: user.name });
        return {
            status: true,
            message: 'Signin Successful!',
            access_token
        }
    } catch (error) {
        return {
            status: false,
            message: (error as Error).message
        }
    }
}