"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { VscGithubInverted } from "react-icons/vsc";

export const GithubSignIn = () => {
  return (
    <Button
      className="cursor-pointer w-full"
      onClick={() => signIn("github")}
      variant="outline"
    >
      <VscGithubInverted />
      Sign in with Github
    </Button>
  );
};
