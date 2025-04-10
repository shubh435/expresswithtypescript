import express from "express";
const app = express();
import dotenv from "dotenv";
import path from "path";
dotenv.config();
const PORT = process.env.PORT || 2000;

app.use(express.static(path.join(__dirname, './Public')))

app.get("/", (req, res) => {
  res.sendFile("./index.html")
});

app.listen(PORT, () => {
  console.log(`____listening on port http://localhost:${PORT}`);
});
