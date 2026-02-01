import { Response, NextFunction } from "express";
import { AuthRequest } from "../middleware/auth.middleware"; 
import { createTrip, getUserTrips } from "../services/trip.service";
import { Trip } from "../models/trip.model";
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

export const getTripByIdController = async (
  req: AuthRequest,
  res: Response
) => {
  const { id } = req.params;

  const trip = await Trip.findOne({
    _id: id,
    user: req.user!.userId
  });

  if (!trip) {
    return res.status(404).json({ message: "Trip not found" });
  }

  res.json(trip);
};
