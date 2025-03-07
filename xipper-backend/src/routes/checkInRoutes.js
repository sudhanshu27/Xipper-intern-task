import express from "express";
import { webCheckIn } from "../controllers/checkInController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/checkin", protect, webCheckIn);

export default router;