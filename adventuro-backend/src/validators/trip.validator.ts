import { z } from "zod";

export const createTripSchema = z.object({
  source: z.string().min(2),
  destination: z.string().min(2),
  startDate: z.string(),
  endDate: z.string(),
  budget: z.number().min(0),
  travelType: z.enum(["SOLO", "COUPLE", "FAMILY"]),
  interests: z.array(z.string()).optional()
});
