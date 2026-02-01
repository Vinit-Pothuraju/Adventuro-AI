import Navbar from "../components/layout/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />

      <section className="pt-32 min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Plan trips
              <span className="text-accent"> intelligently</span>
              <br />with AI
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Adventuro creates personalized travel itineraries based on
              your budget, dates, and interests — instantly.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-accent text-black font-semibold hover:scale-105 transition">
                Start Planning
              </button>
              <button className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-white/10">
                See Demo
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden md:block">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur">
              <p className="text-sm text-gray-300 mb-3">AI Generated Preview</p>

              <div className="space-y-3 text-sm">
                <div className="bg-black/30 p-3 rounded">
                  🏖 Day 1 — Beach walk & sunset café
                </div>
                <div className="bg-black/30 p-3 rounded">
                  🍤 Day 2 — Local food tour
                </div>
                <div className="bg-black/30 p-3 rounded">
                  🏞 Day 3 — Hidden spots & leisure
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section id="how" className="py-24 bg-slate-50 text-slate-900">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12">How Adventuro Works</h2>

    <div className="grid md:grid-cols-3 gap-10">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-2">1️⃣ Enter Trip Details</h3>
        <p className="text-sm text-gray-600">
          Destination, dates, budget, and interests.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-2">2️⃣ AI Plans Everything</h3>
        <p className="text-sm text-gray-600">
          Our AI crafts a realistic day-by-day itinerary.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-2">3️⃣ Travel Smarter</h3>
        <p className="text-sm text-gray-600">
          Save time, money, and stress.
        </p>
      </div>
    </div>
  </div>
</section>
<section
  id="start"
  className="py-24 bg-primary text-white text-center"
>
  <h2 className="text-4xl font-bold mb-4">
    Your next trip starts here ✈️
  </h2>
  <p className="text-gray-300 mb-8">
    Let AI handle the planning. You enjoy the journey.
  </p>
  <button className="px-8 py-4 rounded-xl bg-accent text-black font-semibold hover:scale-105 transition">
    Create Your First Trip
  </button>
</section>

    </>
  );
}
