import React from "react";

const MyProfile = ({ params }) => {
  console.log(params);
  return <h1>My Profile ID : {params.id}</h1>;
};

export default MyProfile;
