'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { signIn } from '../../lib/sign-in';
import { signUp } from '../../lib/sign-up';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaDiscord, FaGoogle } from 'react-icons/fa';

// Separate footer component to avoid hydration issues
const Footer = () => {
  const [year, setYear] = useState<number | null>(null);
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  if (year === null) return null;

  return (
    <footer className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center px-8 py-4 text-md font-bold text-gray-100 tracking-widest select-none mt-8 absolute left-0 bottom-0">
      <span className="mb-2 md:mb-0">KYNDSPACE</span>
      <span>{year}</span>
    </footer>
  );
};

export default function AuthPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get('redirect');
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      if (isLogin) {
        const { error } = await signIn(formData.email, formData.password);
        if (error) {
          setError(error.message ?? 'Authentication failed');
          return;
        }
        router.replace(redirectPath || '/');
      } else {
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        const { error } = await signUp(
          formData.email,
          formData.password,
          formData.name || formData.email.split('@')[0],
          ''
        );
        if (error) {
          setError(error.message ?? 'Registration failed');
          return;
        }
        router.replace(redirectPath || '/');
      }
    } catch {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-dreamy-gradient">
      <div className="flex w-full max-w-6xl bg-gray-100 backdrop-blur-md rounded-3xl shadow-2xl border border-white/40 overflow-hidden h-[500px] md:h-[600px] lg:h-[700px] transition-all duration-300">
        {/* Left: Login Card */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-10 py-14">
          <div className="w-full max-w-md">
            <div className="flex flex-col items-center mb-8">
              <Image
                src="/next.svg"
                alt="KyndSpace Logo"
                width={60}
                height={60}
                className="mb-2"
                priority
              />
              <h2 className="text-base text-gray-400 tracking-widest font-medium mb-2">Welcome Back</h2>
              <p className="text-md font-semibold text-gray-500 mb-1 text-center">
                {isLogin ? 'Please enter your credentials to sign in.' : 'Create your account to get started.'}
              </p>
            </div>
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-200 bg-white/80 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 shadow-sm focus:shadow-md sm:text-sm transition"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-200 bg-white/80 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 shadow-sm focus:shadow-md sm:text-sm transition"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {!isLogin && (
                <>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-200 bg-white/80 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 shadow-sm focus:shadow-md sm:text-sm transition"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-200 bg-white/80 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 shadow-sm focus:shadow-md sm:text-sm transition"
                    placeholder="Username"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 bg-gradient-to-r from-sky-400 via-pink-200 to-teal-300 hover:brightness-110 hover:scale-105 text-gray-900 font-semibold rounded-md shadow focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 hover:cursor-pointer transition-all"
              >
                {isLoading ? 'Processing...' : isLogin ? 'Sign in' : 'Sign up'}
              </button>
            </form>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-400" />
              <span className="mx-2 text-sm text-gray-400">or continue with</span>
              <div className="flex-grow border-t border-gray-400" />
            </div>
            <div className="flex gap-4 justify-center mb-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-gray-700 bg-white/70 hover:bg-sky-100/60 hover:cursor-pointer transition shadow-sm" aria-label="Sign in with Discord">
                <FaDiscord className="w-5 h-5 text-indigo-500" />
                Discord
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-md text-gray-700 bg-white/70 hover:bg-pink-100/60 hover:cursor-pointer transition shadow-sm" aria-label="Sign in with Google">
                <FaGoogle className="w-5 h-5 text-red-500" />
                Google
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-gray-700 hover:text-gray-900 hover:cursor-pointer font-medium transition"
              >
                {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>
        </div>
        {/* Right: Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
          <div className="w-full h-full flex items-center justify-center p-2">
            <Image
              src="/directive/content4.jpg"
              alt="Robot"
              className="object-cover w-full h-full rounded-3xl shadow-xl"
              width={800}
              height={800}
              priority
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
