'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 flex flex-col">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
            Your <span className="text-[#9D6FFF]">Productivity</span> Dashboard
          </h1>
          <p className="text-white/60 text-xl mb-12 leading-relaxed">
            Manage tasks, time, and projects all in one place with our intuitive dashboard interface.
          </p>
          <Link href="/pre-register" className="purple-button text-lg">
            Pre-Register Now
          </Link>
        </div>

        {/* Right Content - Dashboard Preview */}
        <div className="flex-1 w-full">
          <div className="glass-effect rounded-2xl p-8 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Tasks */}
              <div className="glass-effect rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[#9D6FFF]/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#9D6FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-white/60">Active Tasks</p>
                  <p className="text-2xl font-semibold">12</p>
                  <p className="text-xs text-white/40">3 due today</p>
                </div>
              </div>

              {/* Events */}
              <div className="glass-effect rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[#4A9DFF]/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#4A9DFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-white/60">Events Today</p>
                  <p className="text-2xl font-semibold">4</p>
                  <p className="text-xs text-white/40">Next: Team Meeting at 2PM</p>
                </div>
              </div>

              {/* Timer */}
              <div className="glass-effect rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[#4FD1C5]/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#4FD1C5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-white/60">Focus Timer</p>
                  <p className="text-2xl font-semibold">25:00</p>
                  <p className="text-xs text-[#4FD1C5]">Start Timer</p>
                </div>
              </div>

              {/* AI Schedule */}
              <div className="glass-effect rounded-xl p-4">
                <div className="w-10 h-10 rounded-lg bg-[#F6AD55]/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#F6AD55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-white/60">Smart Schedule</p>
                  <p className="text-2xl font-semibold">Active</p>
                  <p className="text-xs text-white/40">Optimizing your day</p>
                </div>
              </div>
            </div>

            {/* Priority Tasks */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Priority Tasks</h3>
              <div className="space-y-2">
                <div className="glass-effect rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#F6AD55]"></div>
                    <p className="text-white/80">Complete Project Proposal</p>
                  </div>
                  <p className="text-sm text-white/40">Due in 2 hours</p>
                </div>
                <div className="glass-effect rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-[#4A9DFF]"></div>
                    <p className="text-white/80">Review Team Deliverables</p>
                  </div>
                  <p className="text-sm text-white/40">Due tomorrow</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 