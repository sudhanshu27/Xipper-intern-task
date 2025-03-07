import express from "express";
import {
  createBooking,
  getUserBookings,
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

//Protected routes

router.post("/", protect, createBooking);
router.get("/", protect, getUserBookings);

export default router;
