import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const registerSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
    .string()
    .nonempty({ message: "Confirm password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
    firstName: z.string().nonempty({message: 'Name is REquired'}).min(5,{message: 'First Name must be at least 5 alphabets'})
});
