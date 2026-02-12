import { z } from 'zod'

export const registerValidator = z.object({
    username: z.string().min(4,"Username must be at least 4 letters"),
    password: z.string().min(6,"Password must be at least 6 letters"),
    email: z.email("Please input valid email"),
    tel: z.string().regex(/^[0-9]{10}$/,"Please input proper phone number"),
})