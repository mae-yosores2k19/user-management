"use server";
import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import PersonModel from "@/model/personModel";
import { IPerson } from "@/interfaces";

export const POST = async (request: NextRequest) => {
  try {
    const person: IPerson = await request.json();
    const newPerson = new PersonModel(person);
    await connectMongoDB();
    const result = await newPerson.save();

    return NextResponse.json({
      result,
      msg: "Successfully Created!",
      status: 201,
    });
  } catch (error) {
    console.error("Error in creating person:", error);
    return NextResponse.json(
      { error: "Failed to create person" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  await connectMongoDB();
  const users = await PersonModel.find();
  return NextResponse.json({ users });
};

export const DELETE = async (request: NextRequest) => {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await PersonModel.findByIdAndDelete(id);
  return NextResponse.json({
    msg: "Successfully deleted",
    status: 201,
  });
};
