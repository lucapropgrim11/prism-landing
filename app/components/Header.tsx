'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Product', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0A1F]/95 backdrop-blur-md border-b border-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#6E3AFF] to-[#4318FF] flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-white text-xl font-semibold">Prism</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center">
            <button className="purple-button">
              Pre-Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-white/80 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            ))}
            <button className="w-full mt-4 purple-button">
              Pre-Register Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
} 