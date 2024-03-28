import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(8080, () => {
  console.log("Server Started at port ", PORT);
});
