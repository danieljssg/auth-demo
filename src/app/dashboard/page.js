import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen flex-col p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button variant="outline" type="submit">
            Cerrar Sesión
          </Button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          Bienvenido, {session.user.name || session.user.username}
        </h2>
        <p className="text-gray-600">Has iniciado sesión correctamente.</p>
        <div className="mt-4 p-4 bg-gray-50 rounded-md">
          <h3 className="text-sm font-medium text-gray-500">
            Información de la sesión:
          </h3>
          <pre className="mt-2 text-xs overflow-auto p-2 bg-gray-100 rounded">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
