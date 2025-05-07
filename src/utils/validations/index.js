export * from "./schemas";
export const validator = (schema, data) => {
  const result = schema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      message: result.error.issues[0].message,
      data: null,
    };
  }

  return {
    success: true,
    data: result.data,
    message: null,
  };
};
