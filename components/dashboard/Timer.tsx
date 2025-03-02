'use client';

import { useState, useEffect } from 'react';

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [timerType, setTimerType] = useState<'focus' | 'short' | 'long'>('focus');

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Timer finished
      setIsRunning(false);
      // Play sound or show notification
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    switch (timerType) {
      case 'focus':
        setTimeLeft(25 * 60);
        break;
      case 'short':
        setTimeLeft(5 * 60);
        break;
      case 'long':
        setTimeLeft(15 * 60);
        break;
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const setTimerDuration = (type: 'focus' | 'short' | 'long') => {
    setTimerType(type);
    setIsRunning(false);
    switch (type) {
      case 'focus':
        setTimeLeft(25 * 60);
        break;
      case 'short':
        setTimeLeft(5 * 60);
        break;
      case 'long':
        setTimeLeft(15 * 60);
        break;
    }
  };

  return (
    <div className="ml-20 md:ml-64 pt-24">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-white mb-8">Focus Timer</h1>

        {/* Timer Type Selection */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setTimerDuration('focus')}
            className={`px-6 py-2 rounded-lg font-medium ${
              timerType === 'focus'
                ? 'bg-[#6E3AFF] text-white'
                : 'text-white/60 hover:bg-white/5'
            }`}
          >
            Focus (25m)
          </button>
          <button
            onClick={() => setTimerDuration('short')}
            className={`px-6 py-2 rounded-lg font-medium ${
              timerType === 'short'
                ? 'bg-[#6E3AFF] text-white'
                : 'text-white/60 hover:bg-white/5'
            }`}
          >
            Short Break (5m)
          </button>
          <button
            onClick={() => setTimerDuration('long')}
            className={`px-6 py-2 rounded-lg font-medium ${
              timerType === 'long'
                ? 'bg-[#6E3AFF] text-white'
                : 'text-white/60 hover:bg-white/5'
            }`}
          >
            Long Break (15m)
          </button>
        </div>

        {/* Timer Display */}
        <div className="glass-effect p-12 rounded-2xl mb-8">
          <div className="text-8xl font-bold text-white mb-8">
            {formatTime(timeLeft)}
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={toggleTimer}
              className="purple-button px-8 py-3 text-lg"
            >
              {isRunning ? 'Pause' : 'Start'}
            </button>
            <button
              onClick={resetTimer}
              className="px-8 py-3 rounded-lg border border-white/20 text-white/60 hover:bg-white/5 hover:text-white transition-colors text-lg"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Tips */}
        <div className="text-white/60 text-left">
          <h2 className="text-xl font-semibold text-white mb-4">Tips for Staying Focused</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find a quiet workspace</li>
            <li>Put your phone on silent</li>
            <li>Take regular breaks</li>
            <li>Stay hydrated</li>
            <li>Use the Pomodoro Technique (25 minutes focus, 5 minutes break)</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 