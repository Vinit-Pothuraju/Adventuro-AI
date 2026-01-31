import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware"
import {
  createTripController,
  getMyTripsController
} from "../controllers/trip.controller";
import { createTripSchema } from "../validators/trip.validator";
import { validate } from "../middleware/validate.middleware";

const router = Router();

router.post("/", authMiddleware, createTripController);
router.get("/my", authMiddleware, getMyTripsController);
router.post("/", authMiddleware, validate(createTripSchema), createTripController);

export default router;


