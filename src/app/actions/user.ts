"use server";

import {
  LoginParamsSchema,
  RegisterParamsSchema,
  registerParamsSchema,
} from "@/model/accountModel";

const base = "http://localhost:3000/api";

import { returnValidationErrors } from "next-safe-action";
export const login = async (credentials: LoginParamsSchema) => {
  const response = await fetch(`${base}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }
  const { data } = await response.json();
  return data;
};

export const registerUser = async (params: RegisterParamsSchema) => {
  const response = await fetch(`${base}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  const data = await response.json();
  if (data?.email?.detail) {
    returnValidationErrors(registerParamsSchema, {
      email: {
        _errors: [data.email.detail],
      },
    });
  }
  return data;
};
