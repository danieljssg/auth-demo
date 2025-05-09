"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export const GoogleSignIn = () => {
  return (
    <Button
      className="cursor-pointer w-full"
      onClick={() => signIn("google")}
      variant="outline"
    >
      <FcGoogle />
      Sign in with Google
    </Button>
  );
};
