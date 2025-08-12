"use client";
import { LOGIN_USER } from "@/lib/gql/queries";
import gqlClient from "@/lib/services/gql";
import { Button, Card, Text, TextField } from "@radix-ui/themes"; // example import, adjust if needed
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [userCred, setUserCred] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{ message?: string }>({});
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setError({});
    setLoading(true);

    try {
      const data: { loginUser: boolean } = await gqlClient.request(LOGIN_USER, {
        userCred,
        password,
      });

      if (data.loginUser) {
        window.location.href = "http://localhost:3000";
      } else {
        setError({
          message: "Invalid credentials",
        });
      }
    } catch (error) {
      setError({
        message: "Invalid credentials",
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <main>
      <div className="h-screen flex justify-center items-center">
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="relative h-16 w-16 rounded-full my-5">
            <Image
              fill
              src="https://cdn-icons-png.flaticon.com/512/12474/12474329.png"
              alt="alt"
            />
          </div>
          <TextField.Root
            value={userCred}
            onChange={(e) => setUserCred(e.target.value)}
            className="w-96 mb-2"
            style={{ height: 36 }}
            placeholder="Username or email"
          />
          <TextField.Root
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ height: 36 }}
            className="w-96"
            placeholder="Password"
          />
          {error?.message && <Text color="red">{error.message}</Text>}
          <Button
            disabled={loading}
            onClick={handleLogin}
            style={{ width: "100%", margin: "20px 0" }}
          >
            <Text>Log In</Text>
          </Button>
        </Card>
      </div>
    </main>
  );
}
