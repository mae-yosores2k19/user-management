"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Icons";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { toast } from "sonner";

export const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(
    "%c 🚧: Header -> session ",
    "font-size:16px;background-color:#b5c260;color:white;",
    session
  );
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    toast.success("You have been logged out successfully.", {
      position: "top-right",
    });
    router.replace("/");
    router.refresh();
  };

  return (
    <header>
      <div className="flex flex-row items-center justify-between h-20 px-5 py-4 bg-white">
        <div>
          <Logo />
        </div>
        <div>
          {session && <div>Already authenticated</div>}
          <Button size="sm" variant="ghost" onClick={handleSignOut}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
