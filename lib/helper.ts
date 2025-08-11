import { verifyToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { cookies } from "next/headers";

export async function getUserFromCookies() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) return null;

    const data = verifyToken(token);
    if (!data?.id) return null;

    const user = await prismaClient.user.findUnique({
      where: {
        id: data?.id,
      },
    });

    if(!user) return null;
    return user
  } catch (error) {
    return null
  }
}
