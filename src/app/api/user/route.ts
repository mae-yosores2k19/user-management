"use server";
import { NextRequest, NextResponse } from "next/server";
import Account from "@/model/accountModel";
import connectMongoDB from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { registerParamsSchema } from "@/model/accountModel";

export const POST = async (req: NextRequest) => {
  try {
    const requestBody = await req.json();

    const parsedData = registerParamsSchema.parse(requestBody);
    await connectMongoDB();
    const existingUser = await Account.findOne({ email: parsedData.email });
    if (existingUser) {
      return NextResponse.json({
        msg: "Email already exists! Please try again",
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(parsedData.password, 10);
    await Account.create({
      email: parsedData.email,
      password: hashedPassword,
      firstName: parsedData.firstName,
      lastName: parsedData.lastName,
    });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
};
