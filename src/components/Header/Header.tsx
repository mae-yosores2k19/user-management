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
          {session && (
            <Button
              size="sm"
              variant="default"
              onClick={handleSignOut}
              className="text-white font-semibold text-md shadow-none uppercase  bg-blue-400 hover:bg-blue-500"
            >
              Log out
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
