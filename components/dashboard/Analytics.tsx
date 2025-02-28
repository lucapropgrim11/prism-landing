'use client';

export default function Analytics() {
  const stats = [
    {
      label: 'Tasks Completed',
      value: '24',
      change: '+12%',
      isPositive: true,
    },
    {
      label: 'Focus Time',
      value: '32h',
      change: '+8%',
      isPositive: true,
    },
    {
      label: 'Productivity Score',
      value: '85',
      change: '-3%',
      isPositive: false,
    },
    {
      label: 'Tasks Created',
      value: '45',
      change: '+24%',
      isPositive: true,
    },
  ];

  const activities = [
    {
      day: 'Mon',
      focusHours: 4,
      tasksCompleted: 8,
    },
    {
      day: 'Tue',
      focusHours: 6,
      tasksCompleted: 12,
    },
    {
      day: 'Wed',
      focusHours: 5,
      tasksCompleted: 10,
    },
    {
      day: 'Thu',
      focusHours: 7,
      tasksCompleted: 15,
    },
    {
      day: 'Fri',
      focusHours: 4,
      tasksCompleted: 9,
    },
    {
      day: 'Sat',
      focusHours: 2,
      tasksCompleted: 4,
    },
    {
      day: 'Sun',
      focusHours: 1,
      tasksCompleted: 2,
    },
  ];

  const maxFocusHours = Math.max(...activities.map(a => a.focusHours));
  const maxTasks = Math.max(...activities.map(a => a.tasksCompleted));

  return (
    <div className="ml-20 md:ml-64">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Analytics</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-effect p-6 rounded-xl">
              <p className="text-white/60 text-sm">{stat.label}</p>
              <div className="flex items-end justify-between mt-2">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className={`text-sm font-medium ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Chart */}
        <div className="glass-effect p-6 rounded-xl mb-8">
          <h2 className="text-xl font-semibold text-white mb-6">Weekly Activity</h2>
          <div className="flex items-end space-x-6 h-64">
            {activities.map((activity) => (
              <div key={activity.day} className="flex-1 space-y-2">
                <div className="relative h-full flex flex-col justify-end space-y-1">
                  {/* Focus Hours Bar */}
                  <div
                    className="w-full bg-purple-500/20 rounded-t"
                    style={{
                      height: `${(activity.focusHours / maxFocusHours) * 100}%`,
                    }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-purple-400">
                      {activity.focusHours}h
                    </div>
                  </div>
                  {/* Tasks Bar */}
                  <div
                    className="w-full bg-blue-500/20 rounded-t"
                    style={{
                      height: `${(activity.tasksCompleted / maxTasks) * 100}%`,
                    }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-blue-400">
                      {activity.tasksCompleted}
                    </div>
                  </div>
                </div>
                <div className="text-center text-white/60 text-sm">{activity.day}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-purple-500/20"></div>
              <span className="text-white/60 text-sm">Focus Hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500/20"></div>
              <span className="text-white/60 text-sm">Tasks Completed</span>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="glass-effect p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-4">Insights</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-green-400/10">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Most Productive Day</p>
                <p className="text-white/60">Thursday with 15 tasks completed</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-2 rounded-lg bg-purple-400/10">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium">Peak Focus Hours</p>
                <p className="text-white/60">10 AM - 2 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 