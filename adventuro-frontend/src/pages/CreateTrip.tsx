import { useState } from "react";
import toast from "react-hot-toast";
import { createTrip } from "../api/trip.api"
import { useNavigate } from "react-router-dom";

const interestsList = [
  "🏖 Beach",
  "🏔 Nature",
  "🍜 Food",
  "🏛 History",
  "🎒 Adventure",
  "🛍 Shopping"
];

export default function CreateTrip() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    source: "",
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    travelType: "SOLO",
    interests: [] as string[]
  });

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async () => {
    try {
      await createTrip({
        ...form,
        budget: Number(form.budget)
      });
      toast.success("Trip created! 🚀");
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Failed to create trip");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6">
        <p className="text-sm text-gray-500 mb-2">
          Step {step} of 4
        </p>

        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Where & When ✈️
            </h2>

            <input
              className="w-full mb-3 p-3 border rounded-lg"
              placeholder="Source city"
              onChange={(e) =>
                setForm({ ...form, source: e.target.value })
              }
            />

            <input
              className="w-full mb-3 p-3 border rounded-lg"
              placeholder="Destination"
              onChange={(e) =>
                setForm({ ...form, destination: e.target.value })
              }
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                className="p-3 border rounded-lg"
                onChange={(e) =>
                  setForm({ ...form, startDate: e.target.value })
                }
              />
              <input
                type="date"
                className="p-3 border rounded-lg"
                onChange={(e) =>
                  setForm({ ...form, endDate: e.target.value })
                }
              />
            </div>

            <button
              onClick={next}
              className="mt-6 w-full bg-primary text-white py-3 rounded-lg"
            >
              Continue →
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Budget & Travel Style 💼
            </h2>

            <input
              type="number"
              className="w-full mb-4 p-3 border rounded-lg"
              placeholder="Budget (₹)"
              onChange={(e) =>
                setForm({ ...form, budget: e.target.value })
              }
            />

            <div className="grid grid-cols-3 gap-3">
              {["SOLO", "COUPLE", "FAMILY"].map((type) => (
                <button
                  key={type}
                  onClick={() =>
                    setForm({ ...form, travelType: type })
                  }
                  className={`p-3 rounded-lg border ${
                    form.travelType === type
                      ? "bg-accent text-black"
                      : "bg-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={back}
                className="w-1/2 border rounded-lg py-3"
              >
                Back
              </button>
              <button
                onClick={next}
                className="w-1/2 bg-primary text-white rounded-lg py-3"
              >
                Continue →
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              What do you love? ❤️
            </h2>

            <div className="flex flex-wrap gap-3">
              {interestsList.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`px-4 py-2 rounded-full border ${
                    form.interests.includes(interest)
                      ? "bg-secondary text-black"
                      : "bg-white"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={back}
                className="w-1/2 border rounded-lg py-3"
              >
                Back
              </button>
              <button
                onClick={next}
                className="w-1/2 bg-primary text-white rounded-lg py-3"
              >
                Continue →
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Ready to generate? 🤖
            </h2>

            <p className="text-gray-600 mb-6">
              Our AI will now craft a personalized itinerary
              just for you.
            </p>

            <div className="flex gap-3">
              <button
                onClick={back}
                className="w-1/2 border rounded-lg py-3"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="w-1/2 bg-accent py-3 rounded-lg font-semibold"
              >
                Generate Trip ✨
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
