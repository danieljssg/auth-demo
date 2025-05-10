"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { TfiMicrosoftAlt } from "react-icons/tfi";

export const MicrosoftSignIn = () => {
  return (
    <Button
      className="cursor-pointer w-full"
      onClick={() => signIn("microsoft-entra-id")}
      variant="outline"
      disabled
    >
      <TfiMicrosoftAlt />
      Sign in with Microsoft
    </Button>
  );
};
