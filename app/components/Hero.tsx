import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Hero() {
  return (
    <>
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Navbar />
      <div className="absolute inset-0">
        <Image
          src="/content/kynd-hero.jpg"
          alt="Wellness background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 " />
      <div className="container mx-auto px-6 py-16 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Your Journey to Wellness Starts Here
        </h1>
        <p className="text-xl font-bold md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience personalized wellness through virtual classes, guided meditation, and mindful self-care tracking with KyndSpace.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/auth"
            className="bg-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-700 transition-colors"
          >
            Start Your Journey
          </Link>
          <Link
            href="/auth"
            className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
    </>
  );
} 