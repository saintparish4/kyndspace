"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex justify-between items-center p-4 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-sky-400/60 via-pink-200/60 to-teal-300/60 backdrop-blur-md shadow-lg border-b border-white/10"
            : ""
        }`}
      >
        <Link href="/" className="flex items-center gap-6">
          <Image
            src="/logos/logo-white.svg"
            alt="logo"
            width={100}
            height={100}
          />
          {/* <Link href="/" className="text-xl font-bold text-white">
            KYNDSPACE
          </Link> */}
        </Link>

        <div className="hidden md:flex items-center justify-center gap-7 flex-1 text-xl font-semibold">
          <Link
            href="/articles"
            className="text-white  hover:underline hover:underline-offset-7
            decoration-3 hover:decoration-emerald-400 transition-colors"
          >
            Articles & Resources
          </Link>
          <Link
            href="/meditation"
            className="text-white  hover:underline hover:underline-offset-7 decoration-3 hover:decoration-orange-500 transition-colors"
          >
            Meditation
          </Link>
          <Link
            href="/sleep"
            className="text-white  hover:underline hover:underline-offset-7 decoration-3 hover:decoration-purple-600 transition-colors"
          >
            Sleep
          </Link>
          <Link
            href="/mindfulness"
            className="text-white  hover:underline hover:underline-offset-7 decoration-3 hover:decoration-sky-300 transition-colors"
          >
            Mindfulness
          </Link>
          <Link
            href="/mental"
            className="text-white  hover:underline hover:underline-offset-7 decoration-3 hover:decoration-amber-300 transition-colors"
          >
            Mental Health
          </Link>
        </div>

        <div className="flex items-center gap-4 text-lg">
          <Link
            href="/auth"
            className="hidden md:block text-white font-semibold hover:underline hover:underline-offset-7 decoration-3 hover:decoration-slate-200 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/auth"
            className="bg-white/20 text-white hover:text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gradient-to-r from-sky-400/60 via-pink-200/60 to-teal-300/60 backdrop-blur-md shadow-lg transition-colors border border-white/30"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
