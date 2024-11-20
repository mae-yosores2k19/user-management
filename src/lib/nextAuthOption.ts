import { getServerSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/app/actions";
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";

export const nextAuthOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60 * 24, // 24 hour
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token = {
          ...token,
          user: user,
          jwt: user,
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...token,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
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
          if (!user) {
            return null;
          }
          return user.token;
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
