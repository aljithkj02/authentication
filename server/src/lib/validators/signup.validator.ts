import {z} from 'zod'

const signupSchema = z.object({
    name: z.string({message: 'name is required'}),
    email: z.string({message: 'email is required'}),
    password: z.string({message: 'password is required'})
})

const loginSchema = z.object({
    email: z.string(),
    password: z.string()
})

export const validateSignupBody = (body: any) => {
    return signupSchema.safeParse(body);
}

export const validateLoginBody = (body: any) => {
    return loginSchema.safeParse(body);
}