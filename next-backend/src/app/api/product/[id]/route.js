import { NextResponse } from "next/server";

export const GET = async (req, context) => {
  //   console.log("req", req);
  console.log("context", context);
  console.log("context params", context.params);
  console.log("context params", context.params.id);
  return NextResponse.json(
    {
      msg: "Post success",
    },
    { status: 200 }
  );
};
// export const GET = async (req, { params }) => {
//   console.log("context params", params.id);
//   return NextResponse.json(
//     {
//       msg: "Post success",
//     },
//     { status: 200 }
//   );
// };
