"use client";
import { UserTable } from "@/components/Table/UserTable";
import { UsersList } from "./UsersList";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const router = useRouter();
  //  <ContentWrapper>
  //     {Array.from({ length: 4 }).map((_, index) => (
  //       <div key={index} className="flex w-full flex-col space-y-3">
  //         <Skeleton className="h-[125px] w-full rounded-xl" />
  //         <div className="space-y-2">
  //           <Skeleton className="h-4 w-full" />
  //           <Skeleton className="h-4 w-full" />
  //           <Skeleton className="h-4 w-full" />
  //           <Skeleton className="h-4 w-full" />
  //         </div>
  //       </div>
  //     ))}
  //   </ContentWrapper>
  const { status: sessionStatus } = useSession();
  // if (!session) {
  //   redirect("/");
  // }

  // // Handle the loading state
  // if (sessionStatus === "loading") {
  //   return <h1>Loading...</h1>;
  // }
  useEffect(() => {
    if (sessionStatus !== "authenticated") {
      router.push("/"); // Redirect to home if unauthenticated
    }
  }, [sessionStatus, router]);

  // Handle the loading state
  console.log(
    "%c 🇸🇲: sessionStatus ",
    "font-size:16px;background-color:#e3b477;color:black;",
    sessionStatus
  );
  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex flex-col items-center px-3 md:px-10 m-5 gap-4">
      <UsersList />
      <div className="bg-white w-full rounded-lg">
        <UserTable />
      </div>
    </div>
  );
}
