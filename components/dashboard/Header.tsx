'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DashboardHeader() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0A1F]/95 backdrop-blur-md border-b border-white/[0.02]">
      <div className="px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#6E3AFF] to-[#4318FF] flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-white text-xl font-semibold">Prism</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search tasks, notes, and more..."
                className="w-full px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.05] focus:outline-none focus:border-[#6E3AFF] text-white placeholder-white/40"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-white/60 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-medium">
                  U
                </div>
                <span className="hidden md:block text-white">User</span>
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-[#1A1A2E] border border-white/[0.05] shadow-lg">
                  <div className="py-2">
                    <a href="#profile" className="block px-4 py-2 text-white/80 hover:bg-white/5">
                      Profile Settings
                    </a>
                    <a href="#preferences" className="block px-4 py-2 text-white/80 hover:bg-white/5">
                      Preferences
                    </a>
                    <hr className="my-2 border-white/[0.05]" />
                    <button className="w-full text-left px-4 py-2 text-red-400 hover:bg-white/5">
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 