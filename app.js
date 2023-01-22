const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 2000;

app.get("/", (req, res) => {
  res.send("Hi i am port " + PORT);
});

app.listen(PORT, () => {
  console.log("____listening on port ", PORT);
});
