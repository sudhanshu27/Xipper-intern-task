import express from "express";
import { getAllUsers } from "../controllers/userController.js";

const router = express.Router();

//Routes to get all users
router.get('/', getAllUsers);

export default router;