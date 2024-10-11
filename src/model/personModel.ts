import mongoose, { Schema, Document, Model } from "mongoose";
import { IPerson } from "../interfaces";

interface IPersonModel extends IPerson, Document {}

const personSchema = new Schema<IPersonModel>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
});

// Export the model as a named export
export const PersonModel: Model<IPersonModel> =
  mongoose.models.Person ||
  mongoose.model<IPersonModel>("Person", personSchema);
