import { getServerSession } from "next-auth/next";

import { authOptions } from "@/utils/auth";
import { LogoutButton } from "./auth/_components/Logout";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="p-10">
      {session ? (
        <div>
          <h1>Вы вошли в систему</h1>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <h1>Войдите пожалуйста</h1>
          <Link className="text-blue-500" href={"/auth"}>Авторизация</Link>
        </div>
      )}
    </div>
  );
}
