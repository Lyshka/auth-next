"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";

export const SignInForm = () => {
  const onSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;

    const signInResult = await signIn("email", {
      callbackUrl: `/`,
      email,
    });
  };

  return (
    <form action={onSubmit} className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <Label>Email</Label>
        <Input name="email" type="email" placeholder="name@example.com" />
      </div>

      <Button type="submit" className="mt-4">
        Login with Email
      </Button>
    </form>
  );
};
