"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, CheckCircle2 } from "lucide-react";

function BookingContent() {
  const searchParams = useSearchParams();
  const trainerName = searchParams.get("trainer") || "Expert Trainer";

  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00 AM");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden flex flex-col justify-between">
      <nav className="bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4 flex items-center justify-between">
        <Link
          href="home"
          className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <span className="text-xl font-extrabold text-white tracking-tight">
          Fit<span className="text-orange-500">Life</span> Booking
        </span>
      </nav>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12 w-full">
        {!submitted ? (
          <div>
            <div className="text-center mb-10">
              <span className="text-orange-500 font-semibold tracking-widest uppercase text-xs sm:text-sm block mb-2">
                1-on-1 Consultation
              </span>
              <h1
                className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-wide"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Book Session With{" "}
                <span className="text-orange-500">{trainerName}</span>
              </h1>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-orange-500" /> Select Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider flex items-center gap-1">
                    <Clock className="w-4 h-4 text-orange-500" /> Select Time
                    Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  >
                    <option>07:00 AM</option>
                    <option>09:00 AM</option>
                    <option>04:00 PM</option>
                    <option>07:00 PM</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl uppercase tracking-wider text-sm shadow-xl transition-all cursor-pointer mt-4"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Confirm Session Booking
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-6 shadow-2xl">
            <CheckCircle2 className="w-20 h-20 text-orange-500" />
            <h2
              className="text-3xl font-extrabold text-white uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Booking <span className="text-orange-500">Confirmed!</span>
            </h2>
            <p className="text-gray-300 text-sm max-w-md">
              Your session with{" "}
              <span className="text-orange-500 font-bold">{trainerName}</span>{" "}
              has been successfully scheduled for{" "}
              <span className="text-white font-semibold">
                {date} at {time}
              </span>
              . We look forward to seeing you!
            </p>
            <Link
              href="/"
              className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl uppercase tracking-wider text-sm shadow-lg transition-all"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Return to Home
            </Link>
          </div>
        )}
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-6 text-center text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} FitLife Gym. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
          Loading booking page...
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
