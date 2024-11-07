"use client";
import { UserTable } from "@/components/Table/UserTable";
import { UsersList } from "./UsersList";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center px-3 md:px-10 m-5 gap-4">
      <UsersList />
      <div className="bg-white w-full rounded-lg">
        <UserTable />
      </div>
    </div>
  );
}
