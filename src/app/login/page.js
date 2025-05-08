import { auth } from "@/auth";
import { LoginForm } from "@/components/forms/LoginForm";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="w-full max-w-sm">
      <LoginForm session={session} />
    </div>
  );
}
