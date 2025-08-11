import { getUserFromCookies } from "@/lib/helper";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import {
  createUser,
  loginUser,
  updatedUserProfile,
  updatedUserRole,
} from "./resolvers/user";
import typeDefs from "./typeDefs";

const resolvers = {
  Query: {
    loginUser,
    currentUser: getUserFromCookies,
  },
  Mutation: {
    createUser,
    updatedUserRole,
    updatedUserProfile,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
