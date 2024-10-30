import mongoose, { Schema, Document, Model } from "mongoose";
import { z } from "zod";
import { IUser } from "../interfaces";

interface IUserModel extends IUser, Document {}

const userSchema = new Schema<IUserModel>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// validation schema
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// Type inference for form validation
export type User = z.infer<typeof loginSchema>;

const User: Model<IUserModel> =
  mongoose.models?.Person || mongoose.model("Person", userSchema);

export default User;
// import { passwordSchema } from "@/schemas";
// import { z } from "zod";

// export const loginByTokenParamsSchema = z.object({
//   token: z.string(),
// });
// export type LoginByTokenParamsSchema = z.infer<typeof loginByTokenParamsSchema>;
// export const loginByTokenDTOSchema = z.object({
//   success: z.boolean(),
//   email: z.string().email().optional(),
//   token: z.string().optional(),
//   id: z.number().optional(),
// });

// export const loginParamsSchema = z.object({
//   email: z.string().email(),
//   password: z.string(),
// });
// export type LoginParamsSchema = z.infer<typeof loginParamsSchema>;
// export const loginDTOSchema = z.object({
//   success: z.boolean(),
//   email: z.string().email(),
//   token: z.string(),
// });
// export type LoginDTOSchema = z.infer<typeof loginDTOSchema>;

// export const registerParamsSchema = z
//   .object({
//     email: z.string().email(),
//     password: passwordSchema,
//     firstName: z.string(),
//     lastName: z.string(),
//     confirmPassword: z.string(),
//     termsAndConditions: z.boolean().refine((value) => value === true, {
//       message: "You must agree to the terms and conditions",
//     }),
//     subscribeToNewsletter: z.boolean(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });
// export type RegisterParamsSchema = z.infer<typeof registerParamsSchema>;
// export const registerDTOSchema = z.object({
//   message: z.string(),
// });
// export type RegisterDTOSchema = z.infer<typeof registerDTOSchema>;
