import * as z from "zod";

export const loginFormSchema = z.object({
  email: z
    .email({ message: "Please enter a valid email address." })
    .nonempty({ message: "Email is required." }),
  password: z
    .string()
    .nonempty({ message: "Password is required." })
    .min(8, { message: "Password must be at least 8 characters long." }),
});

export type LoginForm = z.infer<typeof loginFormSchema>;
