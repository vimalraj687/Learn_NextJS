import { NextResponse } from "next/server";

export const GET = async (req) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-Type": "applications/json",
    },
  });
  const posts = await res.json();
  return NextResponse.json({ data: posts });
};
// export async function GET(req) {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     headers: {
//       "Content-Type": "applications/json",
//     },
//   });
//   const posts = await res.json();
//   return NextResponse.json({ data: posts });
// }
