"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  HomeIcon,
  Info,
  ContactIcon,
  Dumbbell,
  Activity,
  Heart,
  Scale,
} from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [reservedSpots, setReservedSpots] = useState({});

  const handleReserve = (className) => {
    setReservedSpots((prev) => ({ ...prev, [className]: !prev[className] }));
  };

  return (
    <div
      id="home"
      className="bg-black max-w-7xl mx-auto px-4 min-h-dvh text-white"
    >
      {/* Navigation Bar */}
      <nav className="bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 lg:px-16 py-4 px-4 sm:px-8 fixed top-0 left-0 w-full flex items-center justify-between z-50">
        {/* Left Side: Hamburger Menu Button (Mobile) & Brand Logo */}
        <div className="flex items-center gap-4">
          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="md:hidden min-h-11 min-w-11 touch-manipulation text-white p-2 z-60 focus:outline-none hover:text-orange-500 transition-colors"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                // Close 'X' icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger bars icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Brand Logo */}
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="text-2xl font-extrabold text-white tracking-tight"
            >
              Fit<span className="text-orange-500">Life</span>
            </a>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              <HomeIcon className="w-4 h-4 text-orange-500" />
              Home
            </a>
          </li>

          <li>
            <a
              href="/about"
              className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              <Info className="w-4 h-4 text-orange-500" />
              About
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              <ContactIcon className="w-4 h-4 text-orange-500" />
              Contact
            </a>
          </li>

          <li>
            <a
              href="/trainers"
              className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors text-sm font-medium"
            >
              <Dumbbell className="w-4 h-4 text-orange-500" />
              Trainers
            </a>
          </li>
        </ul>

        {/* Action Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            type="button"
            href="/join"
            className="relative group z-0 overflow-hidden bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-7 py-3 rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            {/* Subtle Shimmer Light Sweep Effect across the button */}
            <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-all duration-700"></span>

            {/* Button Text */}
            <span
              className="relative z-10 tracking-wide uppercase font-bold"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Join Now
            </span>

            {/* Animated Arrow Icon that slides forward on hover */}
            <svg
              className="w-4 h-4 relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Mobile Dropdown Drawer (Appears when hamburger is toggled) */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="md:hidden z-55 fixed top-20 left-0 w-full bg-zinc-950/95 border-b border-zinc-800 px-6 py-6 flex flex-col gap-5 backdrop-blur-xl shadow-2xl animate-fadeIn"
        >
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-gray-200 hover:text-orange-500 transition-colors text-base font-semibold"
          >
            <HomeIcon className="w-5 h-5 text-orange-500" />
            Home
          </a>
          <a
            href="/about"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-gray-200 hover:text-orange-500 transition-colors text-base font-semibold"
          >
            <Info className="w-5 h-5 text-orange-500" />
            About
          </a>
          <a
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-gray-200 hover:text-orange-500 transition-colors text-base font-semibold"
          >
            <ContactIcon className="w-5 h-5 text-orange-500" />
            Contact
          </a>
          <a
            href="/trainers"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 text-gray-200 hover:text-orange-500 transition-colors text-base font-semibold"
          >
            <Dumbbell className="w-5 h-5 text-orange-500" />
            Trainers
          </a>

          <div className="pt-2">
            <Link
              type="button"
              href="/join"
              onClick={() => setIsOpen(false)}
              className="w-full z-60 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl uppercase tracking-wide text-sm shadow-md shadow-orange-500/20 flex items-center justify-center gap-2"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Join Now
            </Link>
          </div>
        </nav>
      )}

      <main>
        <div className="pt-32 lg:pt-30 pb-8 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-12">
          {/* Left Text Column */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex flex-col items-start uppercase font-extrabold tracking-wider leading-none">
              {/* Small subtitle */}
              <span className="text-orange-500 text-xs md:text-sm font-semibold tracking-widest mb-2">
                Best Fitness In The Town
              </span>

              {/* Hollow Outline Word */}
              <h1
                className="text-4xl md:text-6xl text-transparent"
                style={{
                  WebkitTextStroke: "1px #ffffff",
                  fontFamily: "'Oswald', sans-serif",
                }}
              >
                Welcome
              </h1>

              {/* Solid Stacked Words */}
              <h1
                className="text-4xl md:text-6xl text-white mt-1"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                To
              </h1>
              <h1
                className="text-4xl md:text-6xl text-white mt-1"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Fit<span className="text-orange-500">Life</span>
              </h1>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Your journey to a healthier lifestyle starts here! Whether you are
              looking to build strength, lose weight, or push your limits, our
              world class equipment and expert trainers are here to guide you
              every step of the way. Start your fitness journey with us today
              and unlock your true potential.
            </p>

            <Link
              type="button"
              href="/join"
              className="relative group overflow-hidden bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              {/* Subtle Shimmer Light Sweep Effect across the button */}
              <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 gradient-to-r from-transparent to-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-all duration-700"></span>

              {/* Button Text */}
              <span
                className="relative z-10 tracking-wide uppercase font-bold"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Get Started
              </span>

              {/* Animated Arrow Icon that slides forward on hover */}
              <svg
                className="w-4 h-4 relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          {/* Right Image Column (Appears on top on mobile due to flex-col-reverse) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src="/model.jpg"
                alt="Fitness Image"
                width={500}
                height={500}
                className="object-cover w-full h-auto group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-8 pt-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          {/* Left Title Group */}
          <div className="flex flex-col gap-2">
            <span className="text-orange-500 font-semibold tracking-widest uppercase text-xs md:text-sm flex items-center gap-2">
              <span className="w-8 h-2px bg-orange-500 inline-block"></span>
              Our Offerings
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Explore Our <span className="text-orange-500">Programs</span>
            </h2>
          </div>

          {/* Optional Right Action Link */}
          <a
            href="#programs"
            className="text-gray-400 hover:text-orange-500 text-sm font-semibold tracking-wider uppercase transition duration-300 flex items-center gap-1 group"
          >
            View All Programs
            <span className="group-hover:translate-x-1 transition duration-300">
              →
            </span>
          </a>
        </div>

        <div className="px-4 sm:px-8 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Card 1: Strength Training */}
          <div className="relative h-420px rounded-2xl overflow-hidden border border-zinc-800/80 group shadow-xl bg-zinc-900 flex flex-col justify-between p-6">
            {/* Background Image with slight dimming */}
            <img
              src="/strength.jpg"
              alt="Strength Training"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute inset-0 w-full h-full object-cover brightness-40 group-hover:scale-110 group-hover:brightness-50 transition-all duration-500 ease-out"
            />
            {/* Deep Rich Gradient Overlay */}
            <div className="absolute inset-0 gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/30"></div>

            <div className="relative z-10">
              <Dumbbell className="bg-orange-500 text-white p-2 rounded-xl my-1.5 w-12 h-12 shadow-lg shadow-orange-500/30" />
            </div>

            <div className="relative z-10 flex flex-col justify-end mt-auto">
              <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1">
                Pro Program
              </span>
              <h2
                className="text-2xl font-bold text-white mb-2 uppercase tracking-wide drop-shadow-md"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Strength Training
              </h2>
              <p className="text-gray-200 text-sm mb-4 leading-relaxed font-normal drop-shadow-sm">
                Build muscle and increase your strength with our strength
                training programs.
              </p>
              <Link
                href="/join"
                className="text-orange-400 font-semibold text-sm flex items-center gap-2 hover:text-orange-300 transition-colors cursor-pointer group/link w-max"
              >
                Join Now
                <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* Card 2: Cardio Workouts */}
          <div className="relative h-420px rounded-2xl overflow-hidden border border-zinc-800/80 group shadow-xl bg-zinc-900 flex flex-col justify-between p-6">
            <img
              src="/cardio.jpg"
              alt="Cardio Workouts"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute inset-0 w-full h-full object-cover brightness-40 group-hover:scale-110 group-hover:brightness-50 transition-all duration-500 ease-out"
            />
            <div className="absolute inset-0 gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/30"></div>

            <div className="relative z-10">
              <Activity className="bg-orange-500 text-white p-2 rounded-xl my-1.5 w-12 h-12 shadow-lg shadow-orange-500/30" />
            </div>

            <div className="relative z-10 flex flex-col justify-end mt-auto">
              <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1">
                High Energy
              </span>
              <h2
                className="text-2xl font-bold text-white mb-2 uppercase tracking-wide drop-shadow-md"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Cardio Workouts
              </h2>
              <p className="text-gray-200 text-sm mb-4 leading-relaxed font-normal drop-shadow-sm">
                Improve your cardio health and endurance with our high energy
                cardio workouts.
              </p>
              <Link
                href="/join"
                className="text-orange-400 font-semibold text-sm flex items-center gap-2 hover:text-orange-300 transition-colors cursor-pointer group/link w-max"
              >
                Join Now
                <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* Card 3: Yoga & Flexibility */}
          <div className="relative h-420px rounded-2xl overflow-hidden border border-zinc-800/80 group shadow-xl bg-zinc-900 flex flex-col justify-between p-6">
            <img
              src="/yoga.jpg"
              alt="Yoga & Flexibility"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute inset-0 w-full h-full object-cover brightness-40 group-hover:scale-110 group-hover:brightness-50 transition-all duration-500 ease-out"
            />
            <div className="absolute inset-0 gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/30"></div>

            <div className="relative z-10">
              <Heart className="bg-orange-500 text-white p-2 rounded-xl my-1.5 w-12 h-12 shadow-lg shadow-orange-500/30" />
            </div>

            <div className="relative z-10 flex flex-col justify-end mt-auto">
              <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1">
                Mind & Body
              </span>
              <h2
                className="text-2xl font-bold text-white mb-2 uppercase tracking-wide drop-shadow-md"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Yoga & Flexibility
              </h2>
              <p className="text-gray-200 text-sm mb-4 leading-relaxed font-normal drop-shadow-sm">
                Enhance your flexibility, balance, and mental well being with
                our yoga sessions.
              </p>
              <Link
                href="/join"
                className="text-orange-400 font-semibold text-sm flex items-center gap-2 hover:text-orange-300 transition-colors cursor-pointer group/link w-max"
              >
                Join Now
                <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          {/* Card 4: Weight Loss */}
          <div className="relative h-420px rounded-2xl overflow-hidden border border-zinc-800/80 group shadow-xl bg-zinc-900 flex flex-col justify-between p-6">
            <img
              src="/weight.jpg"
              alt="Weight Loss"
              className="absolute inset-0 w-full h-full object-cover brightness-40 group-hover:scale-110 group-hover:brightness-50 transition-all duration-500 ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/30"></div>

            <div className="relative z-10">
              <Scale className="bg-orange-500 text-white p-2 rounded-xl my-1.5 w-12 h-12 shadow-lg shadow-orange-500/30" />
            </div>

            <div className="relative z-10 flex flex-col justify-end mt-auto">
              <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1">
                Fat Burn
              </span>
              <h2
                className="text-2xl font-bold text-white mb-2 uppercase tracking-wide drop-shadow-md"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Weight Loss
              </h2>
              <p className="text-gray-200 text-sm mb-4 leading-relaxed font-normal drop-shadow-sm">
                Lose weight and improve your overall health with our targeted
                weight loss programs.
              </p>
              <Link
                href="/join"
                className="text-orange-400 font-semibold text-sm flex items-center gap-2 hover:text-orange-300 transition-colors cursor-pointer group/link w-max"
              >
                Join Now
                <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Trainers Section Grid */}
        <section id="trainers" className="py-16 max-w-7xl px-4 sm:px-8">
          <div className="text-center mb-12 px-4">
            {/* Eyebrow Tag */}
            <span className="text-orange-500 font-semibold tracking-widest uppercase text-xs md:text-sm block mb-2">
              World-Class Guidance
            </span>

            {/* Main Heading with Oswald Font */}
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Meet Our Expert <span className="text-orange-500">Trainers</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Train with certified professionals dedicated to pushing your
              limits and helping you achieve your ultimate fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 h-full md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {/* Trainer 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl h-full overflow-hidden hover:border-orange-500 transition duration-300 flex flex-col group">
              <div className="relative h-72 w-full bg-zinc-800 overflow-hidden">
                <Image
                  src="/Alex.jpg"
                  alt="Alex Turner"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to from-zinc-900 via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="p-6 flex flex-col grow justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                    Strength Coach
                  </span>
                  <h3 className="text-2xl font-bold text-white">Alex Turner</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">
                    Over 8 years of experience helping clients build raw
                    strength and optimal body composition.
                  </p>
                </div>

                <Link
                  href="/book?trainer=Alex%20Turner"
                  className="w-full bg-zinc-800 hover:bg-orange-500 text-white font-semibold py-3 rounded-xl transition duration-300 text-sm text-center block"
                >
                  Book Session
                </Link>
              </div>
            </div>

            {/* Trainer 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl h-full overflow-hidden hover:border-orange-500 transition duration-300 flex flex-col group">
              <div className="relative h-72 w-full bg-zinc-800 overflow-hidden">
                <Image
                  src="/Jessica.jpg"
                  alt="Jessica Lee"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to from-zinc-900 via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="p-6 flex flex-col grow justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                    Yoga & Flexibility Coach
                  </span>
                  <h3 className="text-2xl font-bold text-white">Jessica Lee</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">
                    Specializes in core stability, mobility, and deep mental
                    relaxation techniques to prevent injury.
                  </p>
                </div>

                <Link
                  href="/book?trainer=Jessica%20Lee"
                  className="w-full bg-zinc-800 hover:bg-orange-500 text-white font-semibold py-3 rounded-xl transition duration-300 text-sm text-center block"
                >
                  Book Session
                </Link>
              </div>
            </div>

            {/* Trainer 3 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl h-full overflow-hidden hover:border-orange-500 transition duration-300 flex flex-col group">
              <div className="relative h-72 w-full bg-zinc-800 overflow-hidden">
                <Image
                  src="/Joe.png"
                  alt="Joe Wicks"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to from-zinc-900 via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="p-6 flex flex-col grow justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">
                    Cardio & Weight Loss Coach
                  </span>
                  <h3 className="text-2xl font-bold text-white">Joe Wicks</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mt-2">
                    High energy conditioning expert focused on rapid fat loss,
                    endurance building, and athletic performance.
                  </p>
                </div>

                <Link
                  href="/book?trainer=Joe%20Wicks"
                  className="w-full bg-zinc-800 hover:bg-orange-500 text-white font-semibold py-3 rounded-xl transition duration-300 text-sm text-center block"
                >
                  Book Session
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Plans Section */}
        <section id="join" className="py-9 max-w-7xl px-4 sm:px-8">
          <div className="text-center mb-16 px-4">
            {/* Eyebrow Tag */}
            <span className="text-orange-500 font-semibold tracking-widest uppercase text-xs md:text-sm block mb-2">
              Investment In Yourself
            </span>

            {/* Main Heading with Oswald Font */}
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Flexible Membership <span className="text-orange-500">Plans</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Choose the plan that fits your lifestyle. No hidden fees, cancel
              anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1: Starter */}
            <div className="bg-zinc-900 border  border-zinc-800 rounded-3xl h-full p-8 flex flex-col justify-between hover:border-orange-500 transition duration-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Starter Pass
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  Perfect for casual gym goers getting started.
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-white">
                    $29
                  </span>
                  <span className="text-gray-400 text-sm">/ month</span>
                </div>

                <ul className="space-y-4 text-sm text-gray-300 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✓</span> Full
                    Gym Floor Access
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✓</span>{" "}
                    Standard Locker Room
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✓</span> 1 Guest
                    Pass per Month
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <span>✕</span> Group Fitness Classes
                  </li>
                </ul>
              </div>

              <Link
                type="button"
                href="/join"
                className="w-full bg-zinc-800 hover:bg-orange-500 text-white font-semibold py-3 px-3 rounded-xl transition duration-300 text-sm shadow-md"
              >
                Choose Starter
              </Link>
            </div>

            {/* Plan 2: Pro (Highlighted / Most Popular) */}
            <div className="bg-zinc-900 border-2 border-orange-500 rounded-3xl h-full p-8 flex flex-col justify-between relative shadow-xl shadow-orange-500/10 transform md:-translate-y-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                Most Popular
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Pro Fitness
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  For dedicated athletes wanting full access & classes.
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-white">
                    $59
                  </span>
                  <span className="text-gray-400 text-sm">/ month</span>
                </div>

                <ul className="space-y-4 text-sm text-gray-300 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✓</span> Full
                    Gym Floor Access
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✓</span>{" "}
                    Unlimited Group Classes (Yoga, Cardio)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✓</span> Premium
                    Locker & Towel Service
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✓</span> 1 Free
                    Personal Training Session
                  </li>
                </ul>
              </div>

              <Link
                type="button"
                href="/join"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-3 rounded-xl transition duration-300 text-sm shadow-md"
              >
                Choose Pro Plan
              </Link>
            </div>

            {/* Plan 3: Elite */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl h-full p-8 flex flex-col justify-between hover:border-orange-500 transition duration-300">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Elite VIP</h3>
                <p className="text-gray-400 text-sm mb-6">
                  The ultimate package for maximum performance.
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-white">
                    $99
                  </span>
                  <span className="text-gray-400 text-sm">/ month</span>
                </div>

                <ul className="space-y-4 text-sm text-gray-300 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✓</span> 24/7
                    Priority Gym Access
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✓</span>{" "}
                    Unlimited Group & Specialty Classes
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✓</span> 4
                    Personal Training Sessions / Mo
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500 font-bold">✓</span> Sauna,
                    Spa & Nutrition Guidance
                  </li>
                </ul>
              </div>

              <Link
                type="button"
                href="/join"
                className="w-full bg-zinc-800 hover:bg-orange-500 text-white font-semibold py-3 px-3 rounded-xl transition duration-300 text-sm shadow-md"
              >
                Choose Elite
              </Link>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-10 max-w-7xl px-4 sm:px-8">
          <div className="text-center mb-16 px-4">
            {/* Eyebrow Tag */}
            <span className="text-orange-500 font-semibold tracking-widest uppercase text-xs md:text-sm block mb-2">
              Real Results
            </span>

            {/* Main Heading with Oswald Font */}
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Success <span className="text-orange-500">Stories</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Hear how our members transformed their lives, built strength, and
              reached their ultimate fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Review 1 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-orange-500 transition duration-300 group">
              <div>
                {/* Star Rating */}
                <div className="flex gap-1 text-orange-500 mb-6">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-8 italic">
                  &ldquo;Joining Fit Life completely changed my routine. The
                  trainers are world class, and the strength programs helped me
                  gain 15 lbs of muscle while dropping my body fat
                  significantly.&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                <div className="relative h-12 w-12 rounded-full bg-zinc-800 overflow-hidden shrink-0">
                  <Image
                    src="/b.jpg"
                    alt="David Miller"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">
                    David Miller
                  </h4>
                  <p className="text-orange-500 text-xs font-medium">
                    Member for 1 Year
                  </p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-orange-500 transition duration-300 group">
              <div>
                <div className="flex gap-1 text-orange-500 mb-6">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-8 italic">
                  &ldquo;The yoga and mobility classes here are incredible. As
                  someone who sat at a desk all day, my lower back pain is
                  completely gone and I feel more flexible than ever.&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                <div className="relative h-12 w-12 rounded-full bg-zinc-800 overflow-hidden shrink-0">
                  <Image
                    src="/a.jpg"
                    alt="Sarah Jenkins"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">
                    Sarah Jenkins
                  </h4>
                  <p className="text-orange-500 text-xs font-medium">
                    Pro Member
                  </p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between hover:border-orange-500 transition duration-300 group">
              <div>
                <div className="flex gap-1 text-orange-500 mb-6">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-8 italic">
                  &ldquo;The high energy cardio sessions and personalized
                  coaching kept me motivated every single day. I lost 30 lbs and
                  gained a whole new level of self confidence!&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                <div className="relative h-12 w-12 rounded-full bg-zinc-800 overflow-hidden shrink-0">
                  <Image
                    src="/c.jpg"
                    alt="Michael Chang"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">
                    Michael Chang
                  </h4>
                  <p className="text-orange-500 text-xs font-medium">
                    Elite VIP Member
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Class Timetable Section */}
        <section id="timetable" className="py-10 max-w-7xl px-4 sm:px-8">
          <div className="text-center mb-16 px-4">
            {/* Eyebrow Tag */}
            <span className="text-orange-500 font-semibold tracking-widest uppercase text-xs md:text-sm block mb-2">
              Plan Your Week
            </span>

            {/* Main Heading with Oswald Font */}
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white mb-4 uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Weekly Class <span className="text-orange-500">Schedule</span>
            </h2>

            {/* Subtitle */}
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Explore our diverse lineup of expert led fitness classes and pick
              the perfect time to crush your goals.
            </p>
          </div>

          {/* Timetable Grid / Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Day 1: Monday */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:border-orange-500 transition duration-300">
              <div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-zinc-800">
                  <h3 className="text-xl font-bold text-white">Monday</h3>
                  <span className="bg-orange-500/10 text-orange-500 text-xs font-semibold px-3 py-1 rounded-full">
                    High Energy
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-800/80">
                    <div className="flex justify-between text-xs text-orange-500 font-bold mb-1">
                      <span>06:00 AM - 07:00 AM</span>
                      <span>Strength</span>
                    </div>
                    <h4 className="text-white font-bold text-base">
                      Raw Strength & Power
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      Instructor: Alex Turner
                    </p>
                  </div>

                  <div className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-800/80">
                    <div className="flex justify-between text-xs text-orange-500 font-bold mb-1">
                      <span>05:30 PM - 06:30 PM</span>
                      <span>Cardio</span>
                    </div>
                    <h4 className="text-white font-bold text-base">
                      Fat Loss HIIT Circuit
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      Instructor: Marcus Vance
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleReserve("monday-card")}
                className={`w-full py-3 rounded-xl font-bold text-sm tracking-wider uppercase transition-all cursor-pointer ${
                  reservedSpots["monday-card"]
                    ? "bg-green-600 text-white"
                    : "bg-zinc-800 hover:bg-orange-500 text-white"
                }`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {reservedSpots["monday-card"]
                  ? "Spot Reserved ✓"
                  : "Reserve Spot"}
              </button>
            </div>

            {/* Day 2: Wednesday */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:border-orange-500 transition duration-300">
              <div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-zinc-800">
                  <h3 className="text-xl font-bold text-white">Wednesday</h3>
                  <span className="bg-orange-500/10 text-orange-500 text-xs font-semibold px-3 py-1 rounded-full">
                    Mobility
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-800/80">
                    <div className="flex justify-between text-xs text-orange-500 font-bold mb-1">
                      <span>07:00 AM - 08:00 AM</span>
                      <span>Yoga</span>
                    </div>
                    <h4 className="text-white font-bold text-base">
                      Core Stability & Flow
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      Instructor: Jessica Lee
                    </p>
                  </div>

                  <div className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-800/80">
                    <div className="flex justify-between text-xs text-orange-500 font-bold mb-1">
                      <span>06:00 PM - 07:00 PM</span>
                      <span>Endurance</span>
                    </div>
                    <h4 className="text-white font-bold text-base">
                      Athletic Conditioning
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      Instructor: Marcus Vance
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleReserve("wednesday-card")}
                className={`w-full py-3 rounded-xl font-bold text-sm tracking-wider uppercase transition-all cursor-pointer ${
                  reservedSpots["wednesday-card"]
                    ? "bg-green-600 text-white"
                    : "bg-zinc-800 hover:bg-orange-500 text-white"
                }`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {reservedSpots["wednesday-card"]
                  ? "Spot Reserved ✓"
                  : "Reserve Spot"}
              </button>
            </div>

            {/* Day 3: Friday */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:border-orange-500 transition duration-300">
              <div>
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-zinc-800">
                  <h3 className="text-xl font-bold text-white">Friday</h3>
                  <span className="bg-orange-500/10 text-orange-500 text-xs font-semibold px-3 py-1 rounded-full">
                    Peak Performance
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-800/80">
                    <div className="flex justify-between text-xs text-orange-500 font-bold mb-1">
                      <span>06:30 AM - 07:30 AM</span>
                      <span>Strength</span>
                    </div>
                    <h4 className="text-white font-bold text-base">
                      Hypertrophy & Mass
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      Instructor: Alex Turner
                    </p>
                  </div>

                  <div className="bg-zinc-800/50 p-4 rounded-2xl border border-zinc-800/80">
                    <div className="flex justify-between text-xs text-orange-500 font-bold mb-1">
                      <span>05:00 PM - 06:00 PM</span>
                      <span>Recovery</span>
                    </div>
                    <h4 className="text-white font-bold text-base">
                      Deep Stretch & Recovery
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">
                      Instructor: Jessica Lee
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleReserve("friday-card")}
                className={`w-full py-3 rounded-xl font-bold text-sm tracking-wider uppercase transition-all cursor-pointer ${
                  reservedSpots["friday-card"]
                    ? "bg-green-600 text-white"
                    : "bg-zinc-800 hover:bg-orange-500 text-white"
                }`}
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {reservedSpots["friday-card"]
                  ? "Spot Reserved ✓"
                  : "Reserve Spot"}
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer Section */}
      <footer className=" bg-zinc-950 border-t border-zinc-900 pt-16 pb-10 px-6 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Fit<span className="text-orange-500">Life</span>
              </span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed mb-6">
              Your ultimate destination for elite strength training, yoga
              mobility, and high-energy conditioning. Push your limits and
              transform your life today.
            </p>
            <div className="flex gap-4 text-white">
              {/* Instagram Link */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
              >
                <img
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  src="instagram.png"
                  alt="instagram"
                />
              </a>

              {/* Facebook Link */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
              >
                <img
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  src="social.png"
                  alt="facebook"
                />
              </a>

              {/* YouTube Link */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition duration-300"
              >
                <img
                  className="w-8 h-8 fill-current"
                  viewBox="0 0 24 24"
                  src="youtube.png"
                  alt="youtube"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2.5 text-sm text-gray-400">
              <Link
                href="/"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-orange-500 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/#trainers"
                className="hover:text-orange-500 transition-colors"
              >
                Expert Trainers
              </Link>
              <Link
                href="/#timetable"
                className="hover:text-orange-500 transition-colors"
              >
                Class Timetable
              </Link>
              <Link
                href="/join"
                className="hover:text-orange-500 transition-colors"
              >
                Membership Plans
              </Link>
            </div>
          </div>

          {/* Column 3: Working Hours */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">
              Operating Hours
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex justify-between pb-2 border-b border-zinc-900">
                <span className="text-gray-300">Mon - Fri:</span>
                <span className="text-orange-500 font-semibold">
                  05:00 AM - 11:00 PM
                </span>
              </li>
              <li className="flex justify-between pb-2 border-b border-zinc-900">
                <span className="text-gray-300">Saturday:</span>
                <span className="text-orange-500 font-semibold">
                  06:00 AM - 10:00 PM
                </span>
              </li>
              <li className="flex justify-between pb-2 border-b border-zinc-900">
                <span className="text-gray-300">Sunday:</span>
                <span className="text-orange-500 font-semibold">
                  07:00 AM - 08:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}

          <div className="flex flex-col gap-3 pb-16 px-4 sm:px-0">
            <h3
              className="text-xl font-bold text-white uppercase tracking-wide"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Stay <span className="text-orange-500">Updated</span>
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed">
              Subscribe to get fitness tips, special offers, and class updates
              directly in your inbox.
            </p>

            {/* Fixed Newsletter Form layout for Desktop */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-2 mt-2"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-zinc-900 border border-zinc-800 text-white px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors w-full sm:w-180px md:w-200px"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded-xl text-xs md:text-sm transition-all duration-300 shadow-md shadow-orange-500/20 uppercase tracking-wide whitespace-nowrap"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-900 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} FitLife Gym. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
