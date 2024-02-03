import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignInWithButton } from "./_components/SignInWithButton";
import { Github, IceCream } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { redirect } from "next/navigation";
import { SignInForm } from "./_components/SignInForm";

const AuthPage = async () => {
  const sesion = await getServerSession(authOptions);

  if (sesion) {
    redirect("/");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please sign in</CardTitle>

          <CardDescription>
            To access the private page ypu have to be authenticated
          </CardDescription>
        </CardHeader>

        <CardContent>
          <SignInForm />

          <div className="flex w-full mt-4 gap-4">
            <SignInWithButton provider={"github"}>
              <Github />
            </SignInWithButton>

            <SignInWithButton provider={"google"}>
              <IceCream />
            </SignInWithButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default AuthPage;
