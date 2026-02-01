import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import TripCard from "../components/trip/TripCard";
import { getMyTrips } from "../api/trip.api";

export default function Dashboard() {
  const [trips, setTrips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ ADD THIS

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await getMyTrips();
        setTrips(res.data);
      } catch {
        toast.error("Failed to load trips");
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-6xl mx-auto px-6 py-8">
        {loading && (
          <p className="text-gray-500">Loading trips...</p>
        )}

        {!loading && trips.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold mb-2">
              No trips yet ✈️
            </h2>
            <p className="text-gray-500 mb-6">
              Create your first trip and let AI plan it for you.
            </p>

            {/* ✅ WORKING BUTTON */}
            <button
              onClick={() => navigate("/create-trip")}
              className="px-6 py-3 bg-accent rounded-lg font-semibold hover:scale-105 transition"
            >
              Create Trip
            </button>
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <TripCard key={trip._id} trip={trip} />
          ))}
        </div>
      </main>
    </div>
  );
}
