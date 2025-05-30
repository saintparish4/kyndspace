'use client';

import { useState } from 'react';
import Image from 'next/image';
import { signIn } from '@/lib/sign-in';
import { signUp } from '@/lib/sign-up';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

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
        router.push('/');
      } else {
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return;
        }
        const { error } = await signUp(
          formData.email,
          formData.password,
          formData.name || formData.email.split('@')[0], // Use email username as name if not provided
          '' // Default empty image
        );
        if (error) {
          setError(error.message ?? 'Registration failed');
          return;
        }
        router.push('/');
      }
    } catch {
      setError('An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex overflow-hidden">
          {/* Left: Auth Form */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-12">
            <div className="flex flex-col items-center mb-8">
              <Image
                src="/next.svg"
                alt="KyndSpace Logo"
                width={60}
                height={60}
                className="mb-2 dark:invert"
                priority
              />
              <h2 className="text-lg text-gray-400 tracking-widest font-medium mb-2">Welcome Back</h2>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sign in to KyndSpace</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">Please enter your credentials to sign in.</p>
            </div>
            {error && (
              <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-md p-4 mb-4">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm dark:bg-gray-800"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm dark:bg-gray-800"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {!isLogin && (
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm dark:bg-gray-800"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              )}
              {!isLogin && (
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm dark:bg-gray-800"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                {isLoading ? 'Processing...' : isLogin ? 'Sign in' : 'Sign up'}
              </button>
            </form>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
              <span className="mx-2 text-xs text-gray-400">or continue with</span>
              <div className="flex-grow border-t border-gray-200 dark:border-gray-700" />
            </div>
            <div className="flex gap-4 justify-center mb-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" /></svg>
                Facebook
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M21.35 11.1h-9.18v2.8h5.27c-.23 1.2-1.39 3.5-5.27 3.5-3.18 0-5.78-2.63-5.78-5.87s2.6-5.87 5.78-5.87c1.81 0 3.03.77 3.73 1.43l2.54-2.46C16.09 3.58 14.24 2.7 12 2.7 6.48 2.7 2 7.18 2 12.7s4.48 10 10 10c5.52 0 10-4.48 10-10 0-.68-.07-1.34-.2-1.9z" /></svg>
                Google
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium transition"
              >
                {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="hidden md:flex w-1/2 p-2 bg-gray-100 dark:bg-gray-900">
            <Image
              src="/wellness.jpg"
              alt="Wellness"
              className="w-full h-full object-cover rounded-r-2xl"
              width={800}
              height={800}
              priority
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full flex justify-between items-center px-8 py-4 text-xs text-gray-300 tracking-widest select-none">
        <span>SIGN IN FORM</span>
        <span>KYNDSpace</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </div>
  );
} 