import express from "express";
import { getProfile } from "../controller/userProfile.js";
import authMiddleware from "../middlewear/authMiddlewear.js";
import upload from "../middlewear/uploadmMiddlewwear.js";
import { updateProfile } from "../controller/userprofileUPdate.js";

const router = express.Router();

// GET PROFILE
router.get("/profile", authMiddleware, getProfile);

// UPDATE PROFILE (text + image together)
router.put(
  "/profile",authMiddleware,upload.single("profileImage"),updateProfile);

export default router;