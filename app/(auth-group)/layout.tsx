import UserProvider from "@/components/contexts/user-context";
import Header from "@/components/header";
import { getUserFromCookies } from "@/lib/helper";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const user = await getUserFromCookies();
  if (!user) redirect("/login");

  return <UserProvider user={user}>
    <Header/>
    {children}
    </UserProvider>;
}
