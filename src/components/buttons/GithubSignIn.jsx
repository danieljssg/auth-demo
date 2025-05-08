"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { GithubIcon } from "lucide-react";
export const GithubSignIn = () => {
  return (
    <Button className="w-full" onClick={() => signIn("github")}>
      <GithubIcon />
      Sign in with Github
    </Button>
  );
};
