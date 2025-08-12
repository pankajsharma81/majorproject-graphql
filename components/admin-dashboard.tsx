"use client"
import React, { useEffect, useState } from "react";
import AddUserButton from "./add-user-btn";
import gqlClient from "@/lib/services/gql";
import { GET_ALL_USER } from "@/lib/gql/queries";
import { User } from "@/generated/prisma";
import UserCard from "./card";

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getAllUsers() {
      const data: { getAllUsers: User[] } = await gqlClient.request(
        GET_ALL_USER
      );
      const users = data?.getAllUsers || [];
      setUsers(users);
    }
    getAllUsers();
  }, []);
  return (
    <div className="flex justify-between">
      <div></div>
      <div className="w-80 flex flex-col justify-end items-end p-5 gap-10">
        <div>
          <AddUserButton />
        </div>
        <div>
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
      </div>
    </div>
  );
}
