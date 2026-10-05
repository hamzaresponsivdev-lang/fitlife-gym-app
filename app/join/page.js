"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Dumbbell,
  Activity,
  Heart,
  Scale,
  ArrowLeft,
  CreditCard,
  Wallet,
  CheckCircle2,
} from "lucide-react";

export default function JoinPage() {
  const [step, setStep] = useState("form"); // "form", "payment", or "success"
  const [selectedProgram, setSelectedProgram] = useState("Strength Training");
  const [selectedPlan, setSelectedPlan] = useState("Pro Fitness ($59/mo)");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  // Handle form submission and move to payment step
  const handleProceedToPayment = (e) => {
    e.preventDefault();
    setStep("payment");
  };

  // Handle final payment submission
  const handleCompletePayment = (e) => {
    e.preventDefault();
    setStep("success");
  };

  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden flex flex-col justify-between">
      {/* Top Header / Back Button */}
      <nav className="bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4 flex items-center fixed top-0 w-full justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <span className="text-xl font-extrabold text-white tracking-tight">
          Fit<span className="text-orange-500">Life</span> Registration
        </span>
      </nav>

      {/* Main Container */}
      <main className="max-w-3xl mx-auto px-4 pt-20 sm:px-6 py-12 w-full">
        {/* STEP 1: REGISTRATION FORM */}
        {step === "form" && (
          <div>
            <div className="text-center mb-10">
              <span className="text-orange-500 font-semibold tracking-widest uppercase text-xs sm:text-sm block mb-2">
                Step 1 of 2
              </span>
              <h1
                className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-wide"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Complete Your{" "}
                <span className="text-orange-500">Membership</span>
              </h1>
            </div>

            <form
              onSubmit={handleProceedToPayment}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-8"
            >
              {/* Personal Info */}
              <div className="flex flex-col gap-4">
                <h2
                  className="text-xl font-bold text-white uppercase tracking-wide border-b border-zinc-800 pb-3"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  1. Personal Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Program Picker */}
              <div className="flex flex-col gap-4">
                <h2
                  className="text-xl font-bold text-white uppercase tracking-wide border-b border-zinc-800 pb-3"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  2. Choose Your Primary Program
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: "Strength Training", icon: Dumbbell },
                    { name: "Cardio Workouts", icon: Activity },
                    { name: "Yoga & Flexibility", icon: Heart },
                    { name: "Weight Loss", icon: Scale },
                  ].map((prog) => {
                    const IconComponent = prog.icon;
                    const isSelected = selectedProgram === prog.name;
                    return (
                      <div
                        key={prog.name}
                        onClick={() => setSelectedProgram(prog.name)}
                        className={`cursor-pointer border rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 ${
                          isSelected
                            ? "border-orange-500 bg-orange-500/10 shadow-lg"
                            : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-xl ${isSelected ? "bg-orange-500 text-white" : "bg-zinc-900 text-orange-500"}`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h4 className="text-white font-bold text-sm">
                          {prog.name}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Membership Tier */}
              <div className="flex flex-col gap-4">
                <h2
                  className="text-xl font-bold text-white uppercase tracking-wide border-b border-zinc-800 pb-3"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  3. Select Membership Tier
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    "Starter Pass ($29/mo)",
                    "Pro Fitness ($59/mo)",
                    "Elite VIP ($99/mo)",
                  ].map((plan) => (
                    <div
                      key={plan}
                      onClick={() => setSelectedPlan(plan)}
                      className={`cursor-pointer border rounded-xl p-4 text-center transition-all duration-300 ${
                        selectedPlan === plan
                          ? "border-orange-500 bg-orange-500 text-white font-bold shadow-md"
                          : "border-zinc-800 bg-zinc-950 text-gray-300 hover:border-zinc-700"
                      }`}
                    >
                      <span className="text-sm">{plan}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl uppercase tracking-wider text-sm shadow-xl transition-all duration-300 cursor-pointer"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Proceed to Payment
              </button>
            </form>
          </div>
        )}

        {/* STEP 2: PAYMENT PAGE */}
        {step === "payment" && (
          <div>
            <div className="text-center mb-10">
              <span className="text-orange-500 font-semibold tracking-widest uppercase text-xs sm:text-sm block mb-2">
                Step 2 of 2
              </span>
              <h1
                className="text-3xl sm:text-5xl font-extrabold text-white uppercase tracking-wide"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Select Payment <span className="text-orange-500">Method</span>
              </h1>
              <p className="text-gray-400 text-sm mt-2">
                Choose how you would like to pay for your{" "}
                <span className="text-white font-semibold">{selectedPlan}</span>
                .
              </p>
            </div>

            <form
              onSubmit={handleCompletePayment}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-8"
            >
              {/* Payment Method Selector */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  onClick={() => setPaymentMethod("card")}
                  className={`cursor-pointer border rounded-2xl p-5 flex items-center gap-4 transition-all ${
                    paymentMethod === "card"
                      ? "border-orange-500 bg-orange-500/10 shadow-lg"
                      : "border-zinc-800 bg-zinc-950"
                  }`}
                >
                  <CreditCard className="w-6 h-6 text-orange-500" />
                  <div>
                    <h4 className="text-white font-bold text-sm">
                      Credit / Debit Card
                    </h4>
                    <p className="text-gray-400 text-xs">
                      Visa, MasterCard, UnionPay
                    </p>
                  </div>
                </div>

                <div
                  onClick={() => setPaymentMethod("wallet")}
                  className={`cursor-pointer border rounded-2xl p-5 flex items-center gap-4 transition-all ${
                    paymentMethod === "wallet"
                      ? "border-orange-500 bg-orange-500/10 shadow-lg"
                      : "border-zinc-800 bg-zinc-950"
                  }`}
                >
                  <Wallet className="w-6 h-6 text-orange-500" />
                  <div>
                    <h4 className="text-white font-bold text-sm">
                      Mobile Wallet
                    </h4>
                    <p className="text-gray-400 text-xs">
                      Easypaisa, JazzCash, Apple Pay
                    </p>
                  </div>
                </div>
              </div>

              {/* Conditional Inputs Based on Selection */}
              {paymentMethod === "card" ? (
                <div className="flex flex-col gap-4 bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
                  <h3 className="text-sm font-bold text-white uppercase">
                    Enter Card Details
                  </h3>
                  <input
                    type="text"
                    required
                    placeholder="Card Number (4111 2222 3333 4444)"
                    className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="MM / YY"
                      className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                    />
                    <input
                      type="password"
                      required
                      placeholder="CVV"
                      maxLength={4}
                      className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
                  <h3 className="text-sm font-bold text-white uppercase">
                    Select Mobile Wallet Provider
                  </h3>
                  <select className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500">
                    <option>Apple Pay / Google Pay</option>
                  </select>
                  <input
                    type="tel"
                    required
                    placeholder="Wallet Account Number / Phone Number"
                    className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-orange-500"
                  />
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep("form")}
                  className="w-1/3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-4 rounded-xl text-sm transition-all cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl uppercase tracking-wider text-sm shadow-xl transition-all cursor-pointer"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  Pay & Confirm
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3: SUCCESS CONFIRMATION */}
        {step === "success" && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center gap-6 shadow-2xl">
            <CheckCircle2 className="w-20 h-20 text-orange-500 animate-bounce" />
            <h2
              className="text-3xl font-extrabold text-white uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Registration <span className="text-orange-500">Successful!</span>
            </h2>
            <p className="text-gray-300 text-sm max-w-md">
              Thank you,{" "}
              <span className="text-white font-bold">
                {formData.name || "Member"}
              </span>
              ! We have received your payment for the{" "}
              <span className="text-orange-500 font-semibold">
                {selectedPlan}
              </span>
              . A confirmation email has been sent to{" "}
              <span className="text-white">
                {formData.email || "your inbox"}
              </span>
              .
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

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-6 text-center text-xs text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} FitLife Gym. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
