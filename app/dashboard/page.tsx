'use client';

import { useState } from 'react';
import DashboardHeader from '../../components/dashboard/Header';
import Sidebar from '../../components/dashboard/Sidebar';
import TaskList from '../../components/dashboard/TaskList';
import Calendar from '../../components/dashboard/Calendar';
import Timer from '../../components/dashboard/Timer';
import Analytics from '../../components/dashboard/Analytics';
import Notes from '../../components/dashboard/Notes';

export default function DashboardPage() {
  const [activeView, setActiveView] = useState<'tasks' | 'calendar' | 'timer' | 'analytics' | 'notes'>('tasks');

  const renderContent = () => {
    switch (activeView) {
      case 'tasks':
        return <TaskList />;
      case 'calendar':
        return <Calendar />;
      case 'timer':
        return <Timer />;
      case 'analytics':
        return <Analytics />;
      case 'notes':
        return <Notes />;
      default:
        return <TaskList />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0A1F]">
      <DashboardHeader />
      <div className="flex">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
} 