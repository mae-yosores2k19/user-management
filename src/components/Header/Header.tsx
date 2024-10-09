import React from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Icons";

export interface HeaderProps {
  isAuthenticated: boolean;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ onLogout }: HeaderProps) => (
  <header>
    <div className="flex flex-row items-center justify-between h-20 px-5 py-4 bg-white">
      <div>
        <Logo />
      </div>
      <div>
        <Button size="sm" variant="ghost" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </div>
  </header>
);
