import { signIn } from "@/auth/auth";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";

export default function GithubSignIn() {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <Button type="submit" className="w-full bg-main-black h-8">
        <FaGithub color="white" size={15} />
      </Button>
    </form>
  );
}
