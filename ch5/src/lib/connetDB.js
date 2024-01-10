import { Mongoose } from "mongoose";
// import PostModal from "@/models/Post";
export default async () => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.DBNAME,
      user: process.env.DBUSERNAME,
      pass: process.env.DBPASSWORD,
      authSource: process.env.DBAUTHSOURCE,
    };
    console.log(DATABASE_URL);
    await Mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS);
    console.log("Connection Success.......");
  } catch (error) {
    console.log(error);
  }
};
