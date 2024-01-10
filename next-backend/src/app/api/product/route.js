import { NextResponse } from "next/server";
import { headers } from "../../../../next.config";

export async function GET(req) {
  // console.log(req, "vimal");
  // const headers = new Headers(req.headers);
  // console.log(headers, "hears");
  // const { searchParams } = new URL(req.url);
  // const searchParams = req.nextUrl.searchParams;
  // // console.log(searchParams, "bb");
  // console.log(searchParams.get("search"), "bb");
  const cooki1 = req.cookies;
  console.log(cooki1);
  return NextResponse.json({
    msg: "Hello Next Js , Currently i Learn NExt js",
  });
}

export async function POST(req) {
  // console.log(req);
  // const res = await req.json();
  // console.log("vimal", res);
  const formData = await req.formData();
  console.log("formData", formData);
  console.log("formData", formData.get("name"));
  console.log("formData", formData.get("body "));
  return NextResponse.json(
    {
      msg: "Post success",
    },
    { status: 201 }
  );
}
