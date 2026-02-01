import api from "./axios";

export const createTrip = (data: any) => {
  return api.post("/trips", data);
};

export const getMyTrips = () => {
  return api.get("/trips/my");
};
export const getTripById = (id: string) =>
  api.get(`/trips/${id}`);
