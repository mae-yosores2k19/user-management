import mongoose, { Schema, Document, Model } from "mongoose";
import { z } from "zod";
import { IAccount } from "../interfaces";

interface IAccountModel extends IAccount, Document {}
export const passwordSchema = z
  .string()
  .min(8, { message: "Minimum 8 characters" })
  .refine((password) => /[A-Z]/.test(password), {
    message: "At least one uppercase letter",
  })
  .refine((password) => /[a-z]/.test(password), {
    message: "At least one lowercase letter",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "At least one number",
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: "At least one special character",
  });

const userSchema = new Schema<IAccountModel>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const loginParamsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export type LoginParamsSchema = z.infer<typeof loginParamsSchema>;
export const loginDTOSchema = z.object({
  success: z.boolean(),
  email: z.string().email(),
  token: z.string(),
});
export type LoginDTOSchema = z.infer<typeof loginDTOSchema>;

export const registerParamsSchema = z
  .object({
    email: z.string().email(),
    password: passwordSchema,
    firstName: z.string(),
    lastName: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type RegisterParamsSchema = z.infer<typeof registerParamsSchema>;
export const registerDTOSchema = z.object({
  message: z.string(),
});
export type RegisterDTOSchema = z.infer<typeof registerDTOSchema>;

const Account: Model<IAccountModel> =
  mongoose.models?.Account || mongoose.model("Account", userSchema);

export default Account;
