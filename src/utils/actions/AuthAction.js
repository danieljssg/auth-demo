"use server";
import { LoginUserSchema, validator } from "@/utils/validations";
import { signIn } from "@/auth";

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
      redirect: false, // Indica que NO debe redirigir automáticamente
    });

    if (result?.error) {
      return { message: "Credenciales inválidas", ok: false }; // Maneja el error de autenticación
    }
  } catch (error) {
    console.log(error);
    return { message: error.message, ok: false };
  }
};
