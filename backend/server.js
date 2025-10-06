// backend/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// --- TEST ROUTE ---
app.get("/", (req, res) => {
  res.send("✅ SecureWave API is running...");
});

// --- CONNECT DATABASE ---
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/securewave";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ DB connection error:", err));

// --- START SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
feat(backend): add basic Express server
