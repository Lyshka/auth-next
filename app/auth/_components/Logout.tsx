"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  const onClick = () => {
    signOut({ callbackUrl: `${window.location.origin}/auth` });
  };

  return <Button onClick={onClick}>Log out</Button>;
};
