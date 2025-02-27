'use client';

import Link from 'next/link';
import { useState } from 'react';

const FooterSection = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-white/60 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'AI Assistant', href: '#ai-assistant' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Download Apps', href: '#apps' },
    { label: 'Become an Affiliate', href: '#affiliate' },
  ];

  const resourceLinks = [
    { label: 'Help Center', href: '#' },
    { label: 'API Documentation', href: '#' },
    { label: 'System Status', href: '#' },
    { label: 'Release Notes', href: '#' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Security', href: '#' },
  ];

  const socialLinks = [
    { label: 'Twitter', href: '#', icon: '𝕏' },
    { label: 'GitHub', href: '#', icon: '𝔾' },
    { label: 'LinkedIn', href: '#', icon: '𝕃' },
    { label: 'Discord', href: '#', icon: '𝔻' },
  ];

  return (
    <footer className="bg-[#0B0A1F]/95 backdrop-blur-md border-t border-white/[0.02] transition-all duration-500">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsFooterVisible(!isFooterVisible)}
        className="w-full py-2 hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
      >
        <span className="text-white/60">
          {isFooterVisible ? 'Hide Footer' : 'Show Footer'}
        </span>
        <svg
          className={`w-5 h-5 text-white/60 transform transition-transform ${isFooterVisible ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Footer Content */}
      <div className={`transition-all duration-500 overflow-hidden ${
        isFooterVisible ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-[#6E3AFF] to-[#4318FF] flex items-center justify-center text-white font-bold">
                  P
                </div>
                <span className="text-white text-xl font-semibold">Prism</span>
              </Link>
              <p className="text-white/60 mb-6 max-w-md">
                Boost your productivity with AI-powered task management, smart scheduling, and focused work sessions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-white/80 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Sections */}
            <FooterSection title="Product" links={productLinks} />
            <FooterSection title="Resources" links={resourceLinks} />
            <FooterSection title="Company" links={companyLinks} />
            <FooterSection title="Legal" links={legalLinks} />
          </div>

          {/* Newsletter */}
          <div className="border-t border-white/[0.02] pt-8 pb-4">
            <div className="max-w-xl mx-auto text-center">
              <h3 className="text-lg font-semibold mb-2 text-white">Stay Updated</h3>
              <p className="text-white/60 mb-4">
                Subscribe to our newsletter for product updates and productivity tips.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] focus:outline-none focus:border-[#6E3AFF] text-white placeholder:text-white/40"
                />
                <button className="purple-button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/[0.02] mt-8 pt-8 text-center text-white/40">
            <p>© {new Date().getFullYear()} Prism. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 