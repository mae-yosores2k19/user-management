"use server";
import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import PersonModel from "@/model/personModel";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connectMongoDB();
    if (id) {
      const person = await PersonModel.findById({ _id: id });
      if (!person) {
        return NextResponse.json(
          { error: "Person not found" },
          { status: 404 }
        );
      }
      return NextResponse.json({
        result: person,
        msg: "Successfully fetched person by ID",
        status: 200,
      });
    }
  } catch (error) {
    console.error("Error in fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const body = await request.json();

    await connectMongoDB();

    const updatedPerson = await PersonModel.findByIdAndUpdate(id, body);
    if (!updatedPerson) {
      return NextResponse.json({ error: "Person not found" }, { status: 404 });
    }
    return NextResponse.json({
      result: updatedPerson,
      msg: "Successfully Updated!",
      status: 200,
    });
  } catch (error) {
    console.error("Error in updating person:", error);
    return NextResponse.json(
      { error: "Failed to update person" },
      { status: 500 }
    );
  }
};
