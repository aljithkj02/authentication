import { AuthType } from "@prisma/client";
import { prisma } from "../db";
import { SSCInputType } from "../lib/types/ssc.handler.type";

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

        // const token = 
    } catch (error) {
        return {
            status: false,
            message: (error as Error).message
        }
    }
}