"use server";

import { getUserToken } from "@/lib/server-utils";

export async function getUserCart() {
  try {
    const token = await getUserToken();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/cart`,
      {
        headers: {
          token: token as string,
        },
      }
    );

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Something went wrong");

    return data;
  } catch (error) {
    console.log(error);
  }
}
