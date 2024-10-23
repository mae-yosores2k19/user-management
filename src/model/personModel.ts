import mongoose, { Schema, Document, Model } from "mongoose";
import { z } from "zod";
import { IPerson } from "../interfaces";

interface IPersonModel extends IPerson, Document {}

const personSchema = new Schema<IPersonModel>({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

// validation schema
export const profileSchema = z.object({
  id: z.string().optional(),
  fullname: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
});

// Type inference for form validation
export type PersonalProfile = z.infer<typeof profileSchema>;

const Person: Model<IPersonModel> =
  mongoose.models?.Person || mongoose.model("Person", personSchema);

export default Person;
