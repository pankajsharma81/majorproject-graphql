"use client";
import React, { useEffect, useState } from "react";
import AddUserButton from "./add-user-btn";
import gqlClient from "@/lib/services/gql";
import { GET_ALL_PRODUCT, GET_ALL_USER } from "@/lib/gql/queries";
import { Product, User } from "@/generated/prisma";
import UserCard from "./usercard";
import AddProductButton from "./add-product-btn";
import ProductCard from "./productcard";

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

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

  useEffect(() => {
    async function getAllProducts() {
      const data: { getAllProducts: Product[] } = await gqlClient.request(
        GET_ALL_PRODUCT
      );
      const products = data?.getAllProducts || [];
      setProducts(products);
    }
    getAllProducts();
  }, []);

  return (
    <div className="flex justify-between">
      <div>
        <AddProductButton />
      </div>
      <div>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
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
