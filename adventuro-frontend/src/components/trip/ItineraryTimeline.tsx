export default function ItineraryTimeline({
  itinerary
}: {
  itinerary: any;
}) {
  return (
    <div className="space-y-8">
      {itinerary.days.map((day: any) => (
        <div
          key={day.day}
          className="bg-white rounded-2xl shadow p-6"
        >
          <h3 className="text-lg font-bold mb-4">
            Day {day.day} · {day.date}
          </h3>

          <div className="border-l-4 border-accent pl-4 space-y-4">
            {day.activities.map((act: any, idx: number) => (
              <div key={idx} className="flex gap-4">
                <span className="text-sm text-gray-500 w-16">
                  {act.time}
                </span>
                <div>
                  <p className="font-medium">{act.title}</p>
                  <p className="text-sm text-gray-500">
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {day.food?.length > 0 && (
            <div className="mt-6">
              <h4 className="font-semibold mb-2">🍽 Food</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {day.food.map((f: any, i: number) => (
                  <li key={i}>
                    {f.meal}: {f.place}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
