import { Response, NextFunction } from "express";
import { AuthRequest } from "../middleware/auth.middleware"; // ✅ fixed path
import { Trip } from "../models/trip.model";
import { generateItinerary } from "../services/ai.service";

export const generateItineraryController = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { tripId } = req.params;

    const trip = await Trip.findOne({
      _id: tripId,
      user: req.user!.userId
    });

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    const itinerary = await generateItinerary(trip);

    trip.itinerary = itinerary;
    trip.status = "GENERATED";
    await trip.save();

    res.json(itinerary);
  } catch (error) {
    next(error);
  }
};
