"use client";
import { useState } from "react";
import { LoginForm } from "./_components/LoginForm";
import { RegisterForm } from "./_components/RegisterForm";

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister((prev) => !prev);
  };
  return (
    <div className="flex h-screen w-full p-9 bg-white">
      <div className="w-2/3">
        <img
          src="/images/on-boarding.png"
          alt="imageOn boarding "
          className=" object-cover h-full w-full"
        />
      </div>
      <div className="w-1/2">
        <div className="w-full px-6 h-auto flex-col items-center justify-center ">
          <div className="flex flex-col gap-3 rounded-lg border-[#0000001A] bg-[#F7F6FF] border-2 items-center justify-center h-[80vh]  ">
            <p className="text-[#4875B8] font-extrabold text-lg">
              {isRegister ? "Create an account" : "Sign In to your account"}
            </p>
            {isRegister ? (
              <RegisterForm onToggleForm={toggleForm} />
            ) : (
              <LoginForm onToggleForm={toggleForm} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
