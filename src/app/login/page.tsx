'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import bg from '@/images/backgrounds/bg1.webp';
import logo from '@/images/sportsgenph_Text_vector.png';
import loginImage from '@/images/assets/image6.jpg';

const LOGO = () => (
  <div className="relative h-10 w-auto" style={{ aspectRatio: 'auto 180/40' }}>
    <Image
      src={logo}
      alt="SportsGenPh logo"
      fill
      sizes="(max-width: 768px) 100vw, 180px"
      className="object-contain"
      priority
    />
  </div>
);

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const [email, setEmail] = useState('');
   const [formData, setFormData] = useState<LoginFormData>({
      email: '',
      password: '',
    });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
    setIsLoading(true);
    
    try {
      // TODO: Implement actual login logic
      console.log('Login attempt with:', { email });
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to dashboard on successful login
      router.push('/dashboard');
    } catch (err) {
      setErrors({ email: 'Invalid email or password. Please try again.' });
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Navigation */}
      {/* Navigation */}
      <nav className="w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <LOGO />
            </Link>
            <div className="flex items-center">
              <p className="text-sm text-gray-700">
                Don't have an account?{' '}
                <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex min-h-[600px]">
              {/* Photo Section - Hidden on mobile/portrait */}
              <div className="hidden lg:flex lg:w-1/2 relative">
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={loginImage}
                    alt="Sports community"
                    fill
                    sizes="(max-width: 1200px) 50vw, 600px"
                    className="object-cover w-full h-full"
                    priority
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
                    <p className="text-xl text-white leading-relaxed">
                      Continue your sports journey with SportsGenPH. Stay connected with your community.
                    </p>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-2">
                        <span className="text-white text-xl font-bold">1</span>
                      </div>
                      <p className="text-sm font-medium">Find Events</p>
                    </div>
                    <div className="text-center">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-2">
                        <span className="text-white text-xl font-bold">2</span>
                      </div>
                      <p className="text-sm font-medium">Connect</p>
                    </div>
                    <div className="text-center">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-white/20 mb-2">
                        <span className="text-white text-xl font-bold">3</span>
                      </div>
                      <p className="text-sm font-medium">Play & Enjoy</p>
                    </div>
                  </div>
                </div>
                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                  <div className="absolute top-10 right-10 w-16 h-16 rounded-full border-2 border-white/20"></div>
                  <div className="absolute bottom-20 left-10 w-12 h-12 rounded-full border-2 border-white/20"></div>
                </div>
              </div>

              {/* Form Section */}
              <div className="w-full lg:w-1/2 p-8 sm:p-12">
                <div className="max-w-md mx-auto">
                  <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign in to your account</h1>
                    <p className="mt-2 text-sm text-gray-600">
                      Or{' '}
                      <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                        create a new account
                      </Link>
                    </p>
                  </div>

                  {errors.email || errors.password && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm">
                      {errors.email || errors.password}
                    </div>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                      </label>
                      <div className="mt-1 relative">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          autoComplete="current-password"
                          required
                          value={formData.password}
                          onChange={(e) => handleInputChange(e)}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </button>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Remember me
                          </label>
                        </div>
                        <div className="text-sm">
                          <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Signing in...' : 'Sign in'}
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                      </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <span className="sr-only">Sign in with Google</span>
                        <FcGoogle className="w-5 h-5" />
                      </button>

                      <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <span className="sr-only">Sign in with Facebook</span>
                        <FaFacebook className="text-blue-600 w-5 h-5" />
                      </button>

                      <button
                        type="button"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <span className="sr-only">Sign in with Instagram</span>
                        <FaInstagram className="text-pink-600 w-5 h-5" />
                      </button>
                    </div>
                  </form>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Don't have an account?{' '}
                      <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
