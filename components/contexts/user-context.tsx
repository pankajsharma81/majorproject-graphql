"use client";

import { RoleType } from "@/generated/prisma";
import { createContext, ReactNode } from "react";

type UserWithoutPassword = {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar: string | null;
  role: RoleType;
};

export const UserContext = createContext<{
  user?: UserWithoutPassword;
}>({});

export default function UserProvider({
  children,
  user,
}: {
  children: ReactNode;
  user: UserWithoutPassword;
}) {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
