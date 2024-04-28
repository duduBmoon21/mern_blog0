import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//config .env file
dotenv.config();


//Connect db
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("MongoDb is Connected");
  })
  .catch((err) => {
    console.log(err);
  });

//express app
const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!!!");
});
