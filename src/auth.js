import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getSingleUser } from "./lib/db/users";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {
          type: "text",
          label: "Username",
          placeholder: "Username",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "Password",
        },
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to verify if the user exists
        user = await getSingleUser(credentials);

        if (!user) {
          return {
            message: "User not found",
          };
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
});
