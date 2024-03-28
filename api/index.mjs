import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "../routes/user.routes.mjs";
import authRoutes from "../routes/auth.routes.mjs";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server Started at port ", PORT);
});
