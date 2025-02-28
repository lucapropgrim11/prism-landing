'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PreRegisterPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <Script
          src="https://epix-luke.kit.com/products/pre-registration"
          strategy="lazyOnload"
        />
      )}
      
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
            <p className="text-xl text-white/60 mb-8">
              Be among the first to experience the future of productivity.
            </p>
          </div>

          <div className="glass-effect p-8 rounded-2xl">
            <div className="text-center">
              {isClient && (
                <a 
                  href="https://epix-luke.kit.com/products/pre-registration" 
                  data-commerce 
                  className="convertkit-button w-full purple-button inline-block text-center py-4 text-lg"
                >
                  Pre-Register Now
                </a>
              )}
              <p className="mt-6 text-sm text-white/40">
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
      </div>
    </>
  );
} 