import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Hero() {
  return (
    <>
    <section className="relative min-h-screen w-full">
      <Navbar />
      <div className="fixed top-0 left-0 w-full h-full">
        <Image
          src="/content/kynd-hero.jpg"
          alt="Wellness background"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={100}
        />
      </div>
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-6 py-16 text-center">
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
      </div>
    </section>
    </>
  );
} 