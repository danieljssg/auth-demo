import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/forms/LoginForm";

export default async function Home() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }
  return (
    <div className="w-full max-w-sm">
      <LoginForm />
    </div>
  );
}
