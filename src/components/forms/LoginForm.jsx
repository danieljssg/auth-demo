"use client";
import { useActionState, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoginAction } from "@/utils/actions/AuthAction";
import initialState from "@/utils/initialState";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ShieldUser } from "lucide-react";
import { LoaderIcon } from "lucide-react";
import { GithubSignIn } from "../buttons/GithubSignIn";
import { GoogleSignIn } from "../buttons/GoogleSignIn";

export const LoginForm = ({ session }) => {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    LoginAction,
    initialState
  );
  useEffect(() => {
    if (state?.ok === true) {
      router.push("/dashboard");
    } else if (state?.ok === false) {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <Card className="flex flex-col gap-4 justify-center">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="example"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={pending}
              className="cursor-pointer w-full"
            >
              Login
              {pending ? (
                <LoaderIcon className="animate-spin" />
              ) : (
                <ShieldUser />
              )}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="w-full flex flex-col justify-center gap-4">
        <GithubSignIn />
        <GoogleSignIn />
      </CardFooter>
    </Card>
  );
};
