import { connect } from "@/dbConfig/dbConfig";
import User from "@/model/userModal";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody, "req");

    // Check if email already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hashing password
    const salt = await bcryptjs.genSalt(10);
    const hashpassword = await bcryptjs.hash(password, salt);

    // Save hashed password to the database
    const newUser = new User({
      username,
      email,
      password: hashpassword, // Save the hashed password, not the plain text one
    });
    console.log(newUser, "ddd");
    const savedUser = await newUser.save();
    console.log(savedUser, "saved user");

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
