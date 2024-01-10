import connetDB from "@/lib/connetDB";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connetDB();
    return NextResponse.json({ msg: "succeess" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "something went wrong" }, { status: 400 });
  }
}
