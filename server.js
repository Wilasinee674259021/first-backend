// index.js — Express.js Server (Preview)
import express from "express";
const app = express();
const PORT = 3000;
app.use(express.json()); // Middleware: แปลง JSON
// Routes
app.get("/", (req, res) => {
  res.json({ message: "สวัสดีจาก Express.js!" });
});
app.post("/", (req, res) => {
  const { name } = req.body;
  res.json({ message: `สวัสดี ${name} จาก POST method!` });
});
app.listen(PORT, () => {
  console.log(`Server รันอยู่ที่ http://localhost:${3000}`);
});
