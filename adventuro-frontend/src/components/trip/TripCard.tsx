import { useNavigate } from "react-router-dom";

export default function TripCard({ trip }: { trip: any }) {
  const navigate = useNavigate();

  const statusColor =
    trip.status === "GENERATED"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">
            {trip.source} → {trip.destination}
          </h3>
          <span
            className={`text-xs px-2 py-1 rounded-full ${statusColor}`}
          >
            {trip.status}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          {new Date(trip.startDate).toDateString()} –{" "}
          {new Date(trip.endDate).toDateString()}
        </p>

        <p className="text-sm mt-2">
          Budget: ₹{trip.budget}
        </p>
      </div>

      <button
        onClick={() => navigate(`/trips/${trip._id}`)}
        className="mt-4 text-sm font-medium text-sky-600 hover:underline"
      >
        {trip.status === "GENERATED"
          ? "View Itinerary →"
          : "Generate Itinerary →"}
      </button>
    </div>
  );
}
