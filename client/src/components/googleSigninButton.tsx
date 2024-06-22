import { signIn } from "@/auth/auth";
import { Button } from "./ui/button";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignIn() {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <Button type="submit" className="w-full bg-main-black h-8">
        <FcGoogle size={15} />
      </Button>
    </form>
  );
}
