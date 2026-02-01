import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import {
  createTripController,
  getMyTripsController,
  getTripByIdController
} from "../controllers/trip.controller";
import { createTripSchema } from "../validators/trip.validator";
import { validate } from "../middleware/validate.middleware";

const router = Router();

router.get("/my", authMiddleware, getMyTripsController);
router.get("/:id", authMiddleware, getTripByIdController); // ✅ ADD THIS
router.post(
  "/",
  authMiddleware,
  validate(createTripSchema),
  createTripController
);

export default router;
