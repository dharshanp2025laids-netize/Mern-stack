import { z } from "zod";

export const registerschema = z.object({
    name: z.string().min(3, "Nmae must contain 3 letter"),
    email: z.string().email("enter a valid email"),
    password: z.string().min(8,"password should be a minimum of 8 char"),
    age: z.coerce.number().min(18,"age should be 18"),
})