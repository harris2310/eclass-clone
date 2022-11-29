import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb";
import { signIn } from "next-auth/react";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: <string>process.env.GOOGLE_CLIENT_ID,
      clientSecret: <string>process.env?.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log(user);
      const isStudent = await prisma.student.findUnique({
        where: { email: user.email! },
      });
      if (isStudent == undefined) {
        console.log("NOT A STUDENT");
      }
      return user;
    },
    async redirect({ url, baseUrl }) {
      return url;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(authOptions);
