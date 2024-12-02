"use client";
import { UserTable } from "@/components/Table/UserTable";
import { UsersList } from "./UsersList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const { status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus !== "authenticated") {
      router.push("/");
    }
  }, [sessionStatus, router]);
  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex flex-col items-center px-3  m-5 gap-4 container mx-auto">
      <UsersList />
      <div className="bg-white w-full rounded-lg">
        <UserTable />
      </div>
    </div>
  );
}
