// import { SessionProvider } from "next-auth/react";

// //@typescript-eslint/no-explicit-any
// export const AuthProvider = ({ children }: any) => {
//   return <SessionProvider>{children}</SessionProvider>;
// };

// export default AuthProvider;
"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface AuthProviderProps {
  children: React.ReactNode;
  session: Session | null;
}

export const AuthProvider = ({ children, session }: AuthProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
