"use server";
import { NextRequest, NextResponse } from "next/server";
import Account from "@/model/accountModel";
import connectMongoDB from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();
  try {
    if (!email || !password) {
      return NextResponse.json({ msg: "Bad Request", status: 400 });
    }
    await connectMongoDB();
    const existingUser = await Account.findOne({ email });
    if (!existingUser) {
      return NextResponse.json({
        msg: "Incorrect Credentials! Please try again",
        status: 400,
      });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return NextResponse.json({
        msg: "Incorrect Credentials! Please try again",
        status: 400,
      });
    }

    const token = jwt.sign({ user: existingUser }, "jmhy_exercise", {
      expiresIn: "12h",
    });

    return NextResponse.json({
      data: { token },
      msg: "Login",
      status: 201,
    });
  } catch (error) {
    console.error("Error in creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
};
