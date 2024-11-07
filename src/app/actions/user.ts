"use server";

import {
  // loginDTOSchema,
  LoginParamsSchema,
  // LoginParamsSchema,
  // loginParamsSchema,
  // registerDTOSchema,
  RegisterParamsSchema,
  registerParamsSchema,
} from "@/model/accountModel";

const base = "http://localhost:3000/api";

// import { unAuthenticatedAction } from "@/lib/safeAction";
import { returnValidationErrors } from "next-safe-action";
// export const login = unAuthenticatedAction
//   .schema(loginParamsSchema)
//   .outputSchema(loginDTOSchema)
//   .action(async ({ parsedInput }) => {
//     console.log(
//       "%c 💨: parsedInput ",
//       "font-size:16px;background-color:#afc5b8;color:black;",
//       parsedInput
//     );
//     const response = await fetch(`${base}/user/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: parsedInput.email,
//         password: parsedInput.password,
//       }),
//     });

//     const data = await response.json();
//     console.log(
//       "%c 👩‍✈️: data ",
//       "font-size:16px;background-color:#336f44;color:white;",
//       data
//     );

//     // Cast to expected schema type (LoginDTOSchema) if necessary
//     return loginDTOSchema.parse(data); // Validate that data matches the schema
//   });
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
  const data = await response.json();
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
