import { Trip } from "../models/trip.model";

export const createTrip = async (userId: string, data: any) => {
  const trip = await Trip.create({
    ...data,
    user: userId
  });

  return trip;
};

export const getUserTrips = async (userId: string) => {
  return Trip.find({ user: userId }).sort({ createdAt: -1 });
};
