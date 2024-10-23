"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useRegisterForm from "./hooks/useRegisterForm";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type RegisterFormProps = {
  onToggleForm: () => void;
};
export function RegisterForm({ onToggleForm }: RegisterFormProps) {
  const { form, onSubmit } = useRegisterForm();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmVisible, setConfirmVisible] = useState<boolean>(false);

  const toggleVisibility = (type: string) => {
    if (type === "password") {
      setPasswordVisible(!passwordVisible);
    } else {
      setConfirmVisible(!confirmVisible);
    }
  };
  return (
    <Form {...form}>
      <form className="space-y-4 w-full md:w-96" onSubmit={onSubmit}>
        <div className="flex w-full flex-col gap-3 text-start md:flex-row">
          <FormField
            control={form.control}
            name="lastName"
            render={({ field, fieldState }) => (
              <FormItem className="grid w-full  text-start">
                <div className="flex items-center gap-2">
                  <FormLabel className="text-start text-sm font-semibold text-[#505050] opacity-50 2xl:text-base">
                    Last Name
                  </FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="e.g Doe"
                    className={cn(
                      "h-12 w-full rounded-lg border-[#C7C7C7] py-2 pl-3 pr-10 text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[1px] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base",
                      {
                        "border-destructive": Boolean(
                          fieldState.error?.message
                        ),
                      }
                    )}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstName"
            render={({ field, fieldState }) => (
              <FormItem className="grid w-full  text-start">
                <div className="flex items-center gap-2">
                  <FormLabel className="text-start text-sm font-semibold text-[#505050] opacity-50 2xl:text-base">
                    First Name
                  </FormLabel>
                  <FormMessage className="text-sm" />
                </div>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="e.g John"
                    className={cn(
                      "h-12 w-full rounded-lg border-[#C7C7C7] py-2 pl-3 pr-10 text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[1px] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base",
                      {
                        "border-destructive": Boolean(
                          fieldState.error?.message
                        ),
                      }
                    )}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem className="grid w-full  text-start">
              <div className="flex items-center gap-2">
                <FormLabel className="text-start text-sm font-semibold text-[#505050] opacity-50 2xl:text-base">
                  Email Address
                </FormLabel>
                <FormMessage className="text-sm" />
              </div>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your Email Address"
                  className={cn(
                    "h-12 w-full rounded-lg border-[#C7C7C7] py-2 pl-3 pr-10 text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[1px] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base",
                    {
                      "border-destructive": Boolean(fieldState.error?.message),
                    }
                  )}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field, fieldState }) => (
            <FormItem className="grid w-full items-center ">
              <div className="flex items-center gap-2">
                <FormLabel className="text-start text-sm font-semibold text-[#505050] opacity-50 2xl:text-base">
                  Password
                </FormLabel>
                <FormMessage className="text-sm" />
                {/* <div className="ml-auto flex w-40 items-center gap-2">
                    <StrongPasswordIndicator password={password} />
                  </div> */}
              </div>
              <FormControl>
                <div className="relative content-center">
                  <Input
                    type={!passwordVisible ? "password" : "text"}
                    placeholder="Create your Password"
                    className={cn(
                      "h-12 w-full rounded-lg border-[#C7C7C7] py-2 pl-3 pr-10 text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[1px] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base",
                      {
                        "border-destructive": Boolean(
                          fieldState.error?.message
                        ),
                      }
                    )}
                    {...field}
                  />
                  <div
                    onClick={() => toggleVisibility("password")}
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 transform text-black"
                  >
                    {!passwordVisible ? (
                      <EyeOff width={20} height={20} />
                    ) : (
                      <Eye width={20} height={20} />
                    )}
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field, fieldState }) => (
            <FormItem className="grid w-full items-center ">
              <div className="flex items-center gap-2">
                <FormLabel className="text-start text-sm font-semibold text-[#505050] opacity-50 2xl:text-base">
                  Confirm Password
                </FormLabel>
                <FormMessage className="text-sm" />
              </div>
              <FormControl>
                <div className="relative flex w-full content-center">
                  <Input
                    type={!confirmVisible ? "password" : "text"}
                    placeholder="Confirm your Password"
                    className={cn(
                      "h-12 w-full rounded-lg border-[#C7C7C7] py-2 pl-3 pr-10 text-md shadow-sm placeholder:text-md placeholder:text-[#ACACAC] focus:border-[1px] focus:border-[#4875B8] focus:ring-0 2xl:text-base 2xl:placeholder:text-base",
                      {
                        "border-destructive": Boolean(
                          fieldState.error?.message
                        ),
                      }
                    )}
                    {...field}
                  />
                  <div
                    onClick={() => toggleVisibility("confirm-password")}
                    className="absolute right-3 top-1/2 z-10 -translate-y-1/2 transform text-black"
                  >
                    {!confirmVisible ? (
                      <EyeOff width={20} height={20} />
                    ) : (
                      <Eye width={20} height={20} />
                    )}
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          variant="default"
          type="submit"
          className="bg-[#4875B8] h-12 w-full mt-4 font-bold hover:bg-[#4875b8c8]"
        >
          {/* {isExecuting ? "Registering..." : "Register"} */}
          Register
        </Button>
      </form>
      <p className="text-sm">
        {"Already have an account?"}{" "}
        <span
          className="text-[#4875B8] font-bold cursor-pointer"
          onClick={onToggleForm}
        >
          SignIn here
        </span>
      </p>
    </Form>
  );
}
