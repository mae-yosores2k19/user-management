"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Icons";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  // Note: need to implement signout function from next-auth no need for router
  const handleSignout = () => router.back();

  return (
    <header>
      <div className="flex flex-row items-center justify-between h-20 px-5 py-4 bg-white">
        <div>
          <Logo />
        </div>
        <div>
          <Button size="sm" variant="ghost" onClick={handleSignout}>
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
};
