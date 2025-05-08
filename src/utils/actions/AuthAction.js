"use server";
import { LoginUserSchema, validator } from "@/utils/validations";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export const LoginAction = async (prevState, formData) => {
  try {
    const username = formData.get("username") || "";
    const password = formData.get("password") || "";

    const vdata = await validator(LoginUserSchema, {
      username: username.toLowerCase().replace(/\s/g, "").trim(),
      password,
    });
    if (vdata.success === false) {
      return { message: vdata.message, ok: false };
    }

    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { message: "Credenciales inválidas", ok: false };
    }

    return { message: "", ok: true };
  } catch (error) {
    console.log(error);
    return { message: error.message, ok: false };
  }
};
