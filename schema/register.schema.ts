import * as z from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .nonempty({ message: "Name is required." })
      .min(3, { message: "Name must be at least 3 characters long." }),
    email: z
      .email({ message: "Please enter a valid email address." })
      .nonempty({ message: "Email is required." }),
    password: z
      .string()
      .nonempty({ message: "Password is required." })
      .min(8, { message: "Password must be at least 8 characters long." }),
    rePassword: z
      .string()
      .nonempty({ message: "Password is required." })
      .min(8, { message: "Password must be at least 8 characters long." }),
    phone: z
      .string()
      .nonempty({ message: "Phone number is required." })
      .regex(/^01[0-25][0-9]{8}$/, {
        message: "Invalid phone number.",
      }),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match.",
    path: ["rePassword"],
  });

export type RegisterForm = z.infer<typeof registerSchema>;

export const formState = {
  success: false,
  error: {},
  message: null,
};

export type formStateType = {
  success: boolean;
  error: {
    name?: string[];
    email?: string[];
    password?: string[];
    rePassword?: string[];
    phone?: string[];
  };
  message: string | null;
};
