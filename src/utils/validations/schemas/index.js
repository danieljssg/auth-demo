import { z } from "zod";

export const LoginUserSchema = z
  .object({
    username: z
      .string("El nombre de usuario (o correo) es obligatorio")
      .min(1, "El nombre de usuario (o correo) es obligatorio"),
    password: z
      .string("Ingrese su contraseña")
      .min(8, "La contraseña es muy corta o no es válida"),
  })
  .required();
