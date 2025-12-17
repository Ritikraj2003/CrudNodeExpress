import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";
const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URI;

app.use("/api/user", route);
app.use("/api/auth", authRoute);

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  })
  .catch((error) => console.log(error));