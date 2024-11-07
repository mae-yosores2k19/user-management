import { getServerSession, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { login } from "@/app/actions";

export const nextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 1 * 60 * 60 * 24, // 24 hour
  },
  callbacks: {
    async jwt({ token, user }) {
      return {
        ...user,
        ...token,
      };
    },
    async session({ session, token }) {
      session.user = {
        ...token,
      };
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "user-password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const user = await login({
            email: credentials?.email ?? "",
            password: credentials?.password ?? "",
          });
          if (!user?.data?.success) {
            return null;
          }
          return user;
        } catch (error) {
          console.error(error);
          throw new Error("Invalid email or password");
        }
      },
    }),
  ],
} satisfies NextAuthOptions;

export function serverSession(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, nextAuthOptions);
}
