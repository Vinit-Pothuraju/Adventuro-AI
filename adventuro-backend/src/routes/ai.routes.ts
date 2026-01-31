import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware"
import { generateItineraryController } from "../controllers/ai.controller";

const router = Router();

router.post(
  "/generate/:tripId",
  authMiddleware,
  generateItineraryController
);

export default router;
