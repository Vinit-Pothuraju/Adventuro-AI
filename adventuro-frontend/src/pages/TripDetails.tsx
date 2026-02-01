import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getTripById } from "../api/trip.api";
import { generateItinerary } from "../api/ai.api";
import ItineraryTimeline from "../components/trip/ItineraryTimeline";

export default function TripDetails() {
  const { id } = useParams();
  const [trip, setTrip] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchTrip = async () => {
      try {
        const res = await getTripById(id);
        setTrip(res.data);
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message || "Failed to load trip"
        );
        setTrip(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
  }, [id]);

  const handleGenerate = async () => {
    if (!id) return;

    try {
      setAiLoading(true);
      await generateItinerary(id);
      toast.success("AI itinerary generated ✨");

      const res = await getTripById(id);
      setTrip(res.data);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message || "Failed to generate itinerary"
      );
    } finally {
      setAiLoading(false);
    }
  };

  /* ---------------- STATES ---------------- */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading trip...</p>
      </div>
    );
  }

  if (!trip) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Trip not found</p>
      </div>
    );
  }

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h1 className="text-2xl font-bold">
            {trip.source} → {trip.destination}
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            {new Date(trip.startDate).toDateString()} –{" "}
            {new Date(trip.endDate).toDateString()}
          </p>

          <div className="flex flex-wrap gap-2 mt-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-slate-100">
              💼 ₹{trip.budget}
            </span>

            <span className="px-3 py-1 rounded-full bg-slate-100">
              👤 {trip.travelType}
            </span>

            {trip.interests?.map((interest: string) => (
              <span
                key={interest}
                className="px-3 py-1 rounded-full bg-slate-100"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Itinerary */}
        {!trip.itinerary ? (
          <div className="bg-white rounded-2xl shadow p-8 text-center">
            <h2 className="text-xl font-semibold mb-2">
              No itinerary yet 🤖
            </h2>

            <p className="text-gray-500 mb-6">
              Let AI plan your trip day-by-day.
            </p>

            <button
              onClick={handleGenerate}
              disabled={aiLoading}
              className="px-6 py-3 rounded-xl bg-accent font-semibold hover:scale-105 transition disabled:opacity-60"
            >
              {aiLoading ? "AI is planning..." : "Generate Itinerary ✨"}
            </button>
          </div>
        ) : (
          <ItineraryTimeline itinerary={trip.itinerary} />
        )}
      </div>
    </div>
  );
}
