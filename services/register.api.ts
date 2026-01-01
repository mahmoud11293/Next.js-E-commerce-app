"use server";

import { formStateType, registerSchema } from "@/schema/register.schema";
import { success } from "zod";

export async function handleRegister(
  formState: formStateType,
  formData: FormData
) {
  const formValues = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    rePassword: formData.get("rePassword"),
    phone: formData.get("phone"),
  };

  const validationValues = registerSchema.safeParse(formValues);

  if (!validationValues.success) {
    return {
      success: false,
      error: validationValues.error?.flatten().fieldErrors,
      message: null,
    };
  }

  console.log("handleRegister =>", formValues);

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error: {},
        message: data.message,
      };
    }

    return {
      success: true,
      error: {},
      message: data.message,
    };
  } catch (error) {
    console.log(error);
  }
}
