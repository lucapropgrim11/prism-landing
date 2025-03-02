'use client';

import { useState } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'meeting' | 'task' | 'reminder';
}

export default function Calendar() {
  const [currentDate] = useState(new Date());
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'Team Meeting',
      date: '2024-03-01',
      time: '10:00',
      type: 'meeting',
    },
    {
      id: '2',
      title: 'Project Deadline',
      date: '2024-03-02',
      time: '15:00',
      type: 'task',
    },
    {
      id: '3',
      title: 'Client Call',
      date: '2024-03-01',
      time: '14:30',
      type: 'meeting',
    },
  ]);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const getEventType = (type: Event['type']) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-400/10 text-blue-400';
      case 'task':
        return 'bg-purple-400/10 text-purple-400';
      case 'reminder':
        return 'bg-yellow-400/10 text-yellow-400';
      default:
        return 'bg-gray-400/10 text-gray-400';
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    const totalDays = daysInMonth + firstDayOfMonth;
    const rows = Math.ceil(totalDays / 7);

    for (let i = 0; i < rows * 7; i++) {
      const dayNumber = i - firstDayOfMonth + 1;
      const isCurrentMonth = dayNumber > 0 && dayNumber <= daysInMonth;
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNumber);
      const dateString = date.toISOString().split('T')[0];
      const dayEvents = events.filter(event => event.date === dateString);

      days.push(
        <div
          key={i}
          className={`p-2 border-r border-b border-white/[0.02] min-h-[120px] ${
            !isCurrentMonth ? 'bg-white/[0.01]' : ''
          }`}
        >
          {isCurrentMonth && (
            <>
              <span className="text-white/60">{dayNumber}</span>
              <div className="mt-2 space-y-1">
                {dayEvents.map(event => (
                  <div
                    key={event.id}
                    className={`px-2 py-1 rounded text-xs font-medium ${getEventType(event.type)}`}
                  >
                    {event.time} - {event.title}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="ml-20 md:ml-64 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Calendar</h1>
            <p className="text-white/60">
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </p>
          </div>
          <button className="purple-button min-w-[160px] w-[160px] flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Event
          </button>
        </div>

        {/* Calendar Grid */}
        <div className="glass-effect rounded-xl overflow-hidden">
          {/* Weekday Headers */}
          <div className="grid grid-cols-7 border-b border-white/[0.02]">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-4 text-center font-medium text-white/60">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <div className="grid grid-cols-7">
            {renderCalendarDays()}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span className="text-white/60">Meeting</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span className="text-white/60">Task</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <span className="text-white/60">Reminder</span>
          </div>
        </div>
      </div>
    </div>
  );
} 