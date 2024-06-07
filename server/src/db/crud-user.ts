import { LoginInfoType, SignupInfoType } from "../lib/validators/signup.validator";
import bcrypt from 'bcryptjs'
import {prisma} from './index'
import { AuthType } from "@prisma/client";
import { generateToken } from "../lib/jwt";

export const createUser = async ({name, email, password}: SignupInfoType) => {
    try {
        const isUserExist = await prisma.user.findFirst({
            where: { email, authType: AuthType.EMAIL }
        })

        if (isUserExist) {
            return {
                status: false,
                message: 'User with this email already exist!'
            }
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                authType: AuthType.EMAIL
            }
        })

        const token = generateToken({ id: user.id, name })

        return {
            status: true,
            access_token: token,
            message: 'Successfully Signed up!'
        }
    } catch (error) {
        console.log((error as Error).message);
        return {
            status: false,
            message: (error as Error).message 
        };
    }
}

export const checkUser = async ({email, password}: LoginInfoType) => {
    try {
        const user = await prisma.user.findFirst({
            where: { email, authType: AuthType.EMAIL }
        })

        if (!user) {
            return {
                status: false,
                message: 'No such user exist!'
            }
        }

        if (!bcrypt.compareSync(password, user.password || '')) {
            return {
                status: false,
                message: 'Incorrect password!'
            }
        }

        const token = generateToken({ id: user.id, name: user.name })

        return {
            status: true,
            access_token: token,
            message: 'Successfully Logged in!'
        }
    } catch (error) {
        console.log((error as Error).message);
        return {
            status: false,
            message: (error as Error).message 
        };
    }
}