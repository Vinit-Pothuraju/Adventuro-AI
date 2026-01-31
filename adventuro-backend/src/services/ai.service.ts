import Groq from "groq-sdk";
import { env } from "../config/env";
import { AI_CONFIG } from "../config/ai.config";
import { safeJsonParse } from "../utils/jsonRepair";

const groq = new Groq({
  apiKey: env.GROQ_API_KEY
});

export const generateItinerary = async (trip: any) => {
  if (!env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is missing");
  }

  const prompt = `
You are a professional travel planner AI.

Generate a STRICT JSON itinerary.

Trip details:
Source: ${trip.source}
Destination: ${trip.destination}
Start Date: ${trip.startDate}
End Date: ${trip.endDate}
Budget: ${trip.budget}
Travel Type: ${trip.travelType}
Interests: ${trip.interests.join(", ")}

Rules:
- Output ONLY valid JSON
- No markdown
- No explanation

JSON format:
{
  "summary": string,
  "days": [
    {
      "day": number,
      "date": string,
      "activities": [
        {
          "time": string,
          "title": string,
          "description": string
        }
      ],
      "food": [
        {
          "meal": string,
          "place": string
        }
      ]
    }
  ]
}
`;

  let lastError: any;

  for (let attempt = 0; attempt <= AI_CONFIG.maxRetries; attempt++) {
    const model =
      attempt === 0
        ? AI_CONFIG.primaryModel
        : AI_CONFIG.fallbackModel;

    try {
      const response = await groq.chat.completions.create({
        model,
        messages: [
          { role: "system", content: "You output JSON only." },
          { role: "user", content: prompt }
        ],
        temperature: 0.6
      });

      const content = response.choices[0]?.message?.content;
      if (!content) throw new Error("Empty AI response");

      return safeJsonParse(content);
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
};
