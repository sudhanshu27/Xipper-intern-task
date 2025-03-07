import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./src/routes/userRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import bookingRoutes from "./src/routes/bookingRoutes.js";
import checkInRoutes from "./src/routes/checkInRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

//Default route
app.get("/", (req, res) => {
  res.send("API is running...");
});

//Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api", checkInRoutes);

//Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
