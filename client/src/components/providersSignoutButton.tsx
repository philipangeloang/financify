import { signOut } from "@/auth/auth";
import { Button } from "./ui/button";

const ProviderSignOut = () => {
  return (
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
  );
};

export default ProviderSignOut;
