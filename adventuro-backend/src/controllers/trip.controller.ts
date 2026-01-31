import { Response, NextFunction } from "express";
import { AuthRequest } from "../middleware/auth.middleware"; // ✅ fixed path
import { createTrip, getUserTrips } from "../services/trip.service";

export const createTripController = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const trip = await createTrip(req.user!.userId, req.body);
    res.status(201).json(trip);
  } catch (error) {
    next(error);
  }
};

export const getMyTripsController = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const trips = await getUserTrips(req.user!.userId);
    res.json(trips);
  } catch (error) {
    next(error);
  }
};
