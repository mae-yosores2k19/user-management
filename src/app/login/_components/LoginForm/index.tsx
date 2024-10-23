"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useLoginForm from "./hooks/useLoginForm";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type LoginFormProps = {
  onToggleForm: () => void;
};
export function LoginForm({ onToggleForm }: LoginFormProps) {
  const { form, onSubmit } = useLoginForm();

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordEye = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-6 w-full md:w-96">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-start text-md font-semibold text-[#505050] opacity-50 2xl:text-base">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Enter your Email Address"
                  className="h-12 w-full rounded-lg border-[#C7C7C7] py-2 pl-3 pr-10 text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[1px] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="grid w-full gap-2">
              <FormLabel className="text-start text-md font-semibold text-[#505050] opacity-50 2xl:text-base">
                Password
              </FormLabel>
              <div className="relative">
                <Input
                  type={!passwordVisible ? "password" : "text"}
                  placeholder="Enter your Password"
                  className="h-12 w-full rounded-lg border border-[#C7C7C7] py-2 pl-3 pr-10 text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base"
                  {...field}
                />
                <div
                  onClick={togglePasswordEye}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 transform text-black"
                >
                  {!passwordVisible ? (
                    <EyeOff width={20} height={20} />
                  ) : (
                    <Eye width={20} height={20} />
                  )}
                </div>
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-[#4875B8] h-12 w-full mt-4 font-bold hover:bg-[#4875b8c8]"
        >
          Submit
        </Button>
      </form>
      <p className="text-sm">
        {"Don't have an account?"}{" "}
        <span
          className="text-[#4875B8] font-bold cursor-pointer"
          onClick={onToggleForm}
        >
          Register here
        </span>
      </p>
    </Form>
  );
}
