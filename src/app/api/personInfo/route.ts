import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import { PersonModel } from "@/model";
import { IPerson } from "@/interfaces";

export async function POST(request: NextRequest) {
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
}
