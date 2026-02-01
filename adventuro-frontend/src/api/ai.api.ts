import api from "./axios";

export const generateItinerary = (tripId: string) =>
  api.post(`/ai/generate/${tripId}`);
