import express from "express";
const app = express();
import dotenv from "dotenv";
import path from "path";
import { specs, swaggerUi } from "./swagger/swagger";

dotenv.config();
const PORT = process.env.PORT || 2000;
// @ts-ignore
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "Public", "index.html");
  res.sendFile(filePath);
});

app.get("/hello", (req, res) => {
  res.send("Hello, World!")
});

app.listen(PORT, () => {
  console.log(`____listening on port http://localhost:${PORT}`);
});

export default app;
export { PORT };


