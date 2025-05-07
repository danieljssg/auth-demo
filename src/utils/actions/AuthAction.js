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

    const authStatus = await signIn("credentials", {
      username: vdata.data.username,
      password: vdata.data.password,
    });

    console.log(authStatus);

    return {
      message: "ok",
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return { message: error.message, ok: false };
  }
};
