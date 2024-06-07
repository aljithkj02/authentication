import jwt from 'jsonwebtoken'

export const generateToken = (payload: any) => {
    return jwt.sign(payload, process.env.JWT_SECRET || 'secret');
} 

export const verifyToken = (token: string) => {
    try {
        const res = jwt.verify(token, process.env.JWT_SECRET || 'token');
        return {
            status: true,
            data: res as jwt.JwtPayload & { id: number }
        }
    } catch (error) {
        return {
            status: false, 
            message: (error as Error).message
        }
    }
}