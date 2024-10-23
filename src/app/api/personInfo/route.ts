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

export const PUT = async (request: NextRequest) => {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const updatedData: Partial<IPerson> = await request.json();

    await connectMongoDB();

    const updatedPerson = await PersonModel.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

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

export const GET_BY_ID = async (request: NextRequest) => {
  try {
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();

    const person = await PersonModel.findById(id);

    if (!person) {
      return NextResponse.json({ error: "Person not found" }, { status: 404 });
    }

    return NextResponse.json({
      result: person,
      msg: "Successfully fetched person by ID",
      status: 200,
    });
  } catch (error) {
    console.error("Error in fetching person by ID:", error);
    return NextResponse.json(
      { error: "Failed to fetch person by ID" },
      { status: 500 }
    );
  }
};
