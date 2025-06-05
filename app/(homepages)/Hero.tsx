import Image from "next/image";
import Link from "next/link";
import Navbar from "@/global/components/navbar";
import '@/styles/fonts.css'; 

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
        <div className="container mx-auto px-7 py-16 text-center">
          <h1 className="supreme-text-lg text-2xl md:text-6xl font-bold text-gray-200 mb-1">
            DISCOVER WELLNESS YOUR WAY
          </h1>
          {/* Add a unique font for the text below */}
          <p className="supreme-regular text-xl font-bold md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Uncover what well-being truly means to you with purpose-driven rituals tailored to your unique needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/auth"
              className="bg-gradient-to-r from-[#E0C3FC] via-[#F5D7E3] to-[#8EC5FC] text-[#1a365d] px-8 py-3 rounded-full font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 ease-in-out shadow-md"
            >
              Start Your Journey
            </Link>
            
          </div>
        </div>
      </div>
    </section>
    </>
  );
} 