import { signOut } from "@/auth/auth";
import { checkIsAuthenticated } from "@/auth/checkIsAuthenticated";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect("/auth/signin");
  } else {
    return (
      <main className="w-screen h-screen bg-main-black text-main-white flex justify-center items-center">
        <p>Dashboard Page</p>
        <form
          className="w-full"
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit" className="w-full bg-main-black h-8">
            Sign Out
          </Button>
        </form>
      </main>
    );
  }
};

export default Dashboard;
