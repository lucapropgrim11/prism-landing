'use client';
import { useState } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
}

function PreRegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    role: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/pre-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit pre-registration');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="glass-effect p-12 rounded-2xl">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#6E3AFF] to-[#4318FF] flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
            <p className="text-xl text-white/60 mb-8">
              We've received your pre-registration. We'll notify you when Prism launches!
            </p>
            <Link href="/" className="purple-button inline-block">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center text-white/60 hover:text-white mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pre-Register for Prism</h1>
          <p className="text-xl text-white/60">
            Be among the first to experience the future of productivity.
          </p>
        </div>

        <div className="glass-effect p-8 rounded-2xl">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.05] focus:outline-none focus:border-[#6E3AFF] text-white"
                placeholder="Enter your full name"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.05] focus:outline-none focus:border-[#6E3AFF] text-white"
                placeholder="Enter your email address"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.05] focus:outline-none focus:border-[#6E3AFF] text-white"
                placeholder="Enter your company name"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-white/80 mb-2">
                Role (Optional)
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.05] focus:outline-none focus:border-[#6E3AFF] text-white"
                placeholder="Enter your role"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              className={`w-full purple-button relative ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </div>
              ) : (
                'Pre-Register Now'
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-white/40">
            By pre-registering, you agree to our{' '}
            <Link href="#" className="text-[#6E3AFF] hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" className="text-[#6E3AFF] hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PreRegisterPage() {
  return <PreRegisterForm />;
} 