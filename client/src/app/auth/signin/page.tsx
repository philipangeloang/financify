import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import GoogleSignIn from "@/components/googleSigninButton";
import GithubSignIn from "@/components/githubSigninButton";

export default function Home() {
  return (
    <main className="w-screen h-screen bg-main-black flex justify-center items-center">
      <Card className="w-[425px] bg-main-white text-main-black flex flex-col justify-center items-center p-5">
        <CardHeader>
          <CardTitle className="mx-auto">
            <Image
              alt="financify logo"
              width={175}
              height={175}
              src="/financify_logo.png"
            ></Image>
          </CardTitle>
          <CardDescription className="text-main-black/70 text-center">
            Welcome to Financify
          </CardDescription>
        </CardHeader>
        <CardContent className="flex gap-5 w-full justify-center">
          <GoogleSignIn />
          <GithubSignIn />
        </CardContent>
        <CardFooter className="text-xs text-center font-bold">
          Passwordless login for seamless experience
        </CardFooter>
      </Card>
    </main>
  );
}
