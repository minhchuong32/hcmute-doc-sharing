import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

// import authRoutes from "./routes/authRoutes.js";
// import documentRoutes from "./routes/documentRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/docs", documentRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Student Document Sharing Portal API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
