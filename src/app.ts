import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 2000;

app.get("/", (req, res) => {
  res.send("Hello What r u doing " + PORT);
});

app.listen(PORT, () => {
  console.log("____listening on port ", PORT);
});
