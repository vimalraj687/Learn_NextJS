import React from "react";

const Mypost = ({ params }) => {
  console.log(params);
  return <div>My post 123 =={params.id}</div>;
};

export default Mypost;
