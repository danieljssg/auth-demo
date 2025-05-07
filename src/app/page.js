import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Bienvenido</h1>
        <p className="mt-2 text-gray-600">
          Inicia sesión para acceder a tu cuenta
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Button asChild className="w-full">
          <Link href="/login">Iniciar Sesión</Link>
        </Button>
      </div>
    </div>
  );
}
