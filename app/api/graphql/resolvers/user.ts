import prismaClient from "@/lib/services/prisma";
import { generateToken } from "@/lib/services/jwt";
import { cookies } from "next/headers";
import { getUserFromCookies } from "@/lib/helper";
import { RoleType } from "@/generated/prisma";

export async function loginUser(
  _: any,
  args: {
    userCred: string;
    password: string;
  }
) {
  try {
    const cookieStore = await cookies();
    const user = await prismaClient.user.findFirst({
      where: {
        OR: [
          {
            email: args.userCred,
          },
          {
            username: args.userCred,
          },
        ],
      },
    });

    if (!user) return false;

    if (user.password === args.password) {
      // set token
      const token = generateToken({ id: user.id });
      cookieStore.set("token", token);
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export async function createUser(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _: any,
  args: {
    name: string;
    email: string;
    username: string;
    password: string;
    role: RoleType;
  }
) {
  try {
    const user = await getUserFromCookies();

    if (!user) return null;

    if (user.role != "admin") return null;

    const createdUser = await prismaClient.user.create({
      data: args,
    });
    console.log("line 56");
    return createdUser;
  } catch (error) {
    return null;
  }
}

export async function updatedUserRole(
  _: any,
  args: {
    userId: string;
    role: RoleType;
  }
) {
  try {
    const user = await getUserFromCookies();
    if (user?.role != "admin") return false;

    const updatedUser = await prismaClient.user.update({
      where: {
        id: args.userId,
      },
      data: {
        role: args.role,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
}

export async function updatedUserProfile(
  _: any,
  args: {
    userId: string;
    name: string;
    email: string;
    username: string;
    avatar: string;
  }
) {
  try {
    const dataToSave = {
      name: args.name,
      username: args.username,
      email: args.email,
      avatar: args.avatar,
    };
    const user = await getUserFromCookies();

    if (user?.role != "admin" && user?.id != args.userId) return false;

    await prismaClient.user.update({
      where: {
        id: args.userId,
      },
      data: dataToSave,
    });
    return true;
  } catch (error) {
    return false;
  }
}

export async function getAllUsers() {
  try {
    const users = await prismaClient.user.findMany({
      where: {
        role: {
          not: "admin",
        },
      },
    });
    return users;
  } catch (error) {
    return null;
  }
}
