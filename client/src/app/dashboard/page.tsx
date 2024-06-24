import { checkIsAuthenticated } from "@/auth/checkIsAuthenticated";
import { redirect } from "next/navigation";
import ProviderSignOut from "@/components/providersSignoutButton";

const Dashboard = async () => {
  const isAuthenticated = await checkIsAuthenticated();

  if (!isAuthenticated) {
    redirect("/auth/signin");
  } else {
    return (
      <main className="w-screen h-screen bg-main-black text-main-white flex justify-center items-center">
        <p>Dashboard Page</p>
        <ProviderSignOut />
      </main>
    );
  }
};

export default Dashboard;
