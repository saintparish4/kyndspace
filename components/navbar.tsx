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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50">
            <div className={`flex justify-between items-center p-4 transition-all duration-300 ${
                isScrolled 
                ? 'bg-gradient-to-r from-purple-600/40 via-purple-500/40 to-pink-600/40 backdrop-blur-md shadow-lg border-b border-white/10' 
                : ''
            }`}>
                <div className="flex items-center gap-4">
                    {/* <Image 
                        src="/logo.png" 
                        alt="logo" 
                        width={32} 
                        height={32} 
                    /> */}
                    <Link href="/" className="text-2xl font-bold text-white">KyndSpace</Link>
                </div>
                
                <div className="hidden md:flex items-center gap-9 text-lg font-semibold">
                    <Link href="/" className="text-white hover:text-gray-300 hover:underline hover:underline-offset-7 hover:decoration-rose-400 transition-colors">
                        Home
                    </Link>
                    <Link href="/classes" className="text-white hover:text-gray-300 hover:underline hover:underline-offset-7 hover:decoration-rose-400 transition-colors">
                        Classes
                    </Link>
                    <Link href="/meditation" className="text-white hover:text-gray-300 hover:underline hover:underline-offset-7 hover:decoration-rose-400 transition-colors">
                        Meditation
                    </Link>
                    <Link href="/tracking" className="text-white hover:text-gray-300 hover:underline hover:underline-offset-7 hover:decoration-rose-400 transition-colors">
                        Tracking
                    </Link>
                </div>

                <div className="flex items-center gap-4 text-lg">
                    <Link 
                        href="/auth" 
                        className="hidden md:block text-white font-semibold hover:text-rose-300   transition-colors"
                    >
                        Sign In
                    </Link>
                    <Link 
                        href="/auth" 
                        className="bg-white/20 backdrop-blur-sm text-white hover:text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-500/20 transition-colors border border-white/30"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    )
}