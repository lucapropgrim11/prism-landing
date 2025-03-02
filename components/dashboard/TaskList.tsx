'use client';

import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete Project Proposal',
      description: 'Write and submit the project proposal for the new client',
      status: 'in_progress',
      priority: 'high',
      dueDate: '2024-03-01',
    },
    {
      id: '2',
      title: 'Review Team Deliverables',
      description: 'Review and provide feedback on team submissions',
      status: 'todo',
      priority: 'medium',
      dueDate: '2024-03-02',
    },
    {
      id: '3',
      title: 'Update Documentation',
      description: 'Update the project documentation with recent changes',
      status: 'completed',
      priority: 'low',
      dueDate: '2024-02-28',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState<Partial<Task>>({
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
    dueDate: new Date().toISOString().split('T')[0],
  });

  const [filter, setFilter] = useState<'all' | 'todo' | 'in_progress' | 'completed'>('all');

  const filteredTasks = tasks.filter(task => 
    filter === 'all' ? true : task.status === filter
  );

  const handleAddTask = () => {
    if (!newTask.title) return;

    const task: Task = {
      id: Date.now().toString(),
      title: newTask.title,
      description: newTask.description,
      status: newTask.status as Task['status'],
      priority: newTask.priority as Task['priority'],
      dueDate: newTask.dueDate,
    };

    setTasks([task, ...tasks]);
    setIsModalOpen(false);
    setNewTask({
      title: '',
      description: '',
      status: 'todo',
      priority: 'medium',
      dueDate: new Date().toISOString().split('T')[0],
    });
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-400';
      case 'medium':
        return 'text-yellow-400';
      case 'low':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-400/10 text-green-400';
      case 'in_progress':
        return 'bg-blue-400/10 text-blue-400';
      case 'todo':
        return 'bg-gray-400/10 text-gray-400';
      default:
        return 'bg-gray-400/10 text-gray-400';
    }
  };

  return (
    <div className="ml-20 md:ml-64 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Tasks</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="purple-button min-w-[160px] w-[160px] flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            New Task
          </button>
        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-8">
          {(['all', 'todo', 'in_progress', 'completed'] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === status
                  ? 'bg-[#6E3AFF] text-white'
                  : 'text-white/60 hover:bg-white/5'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="glass-effect p-6 rounded-xl hover:border-[#6E3AFF]/20 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold text-white">{task.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(task.status)}`}>
                      {task.status.replace('_', ' ')}
                    </span>
                    <span className={`text-sm font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority} priority
                    </span>
                  </div>
                  {task.description && (
                    <p className="mt-2 text-white/60">{task.description}</p>
                  )}
                  {task.dueDate && (
                    <p className="mt-2 text-sm text-white/40">
                      Due: {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-white/60 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="p-2 text-white/60 hover:text-red-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Task Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="glass-effect p-8 rounded-2xl w-full max-w-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Create New Task</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-white/60 mb-2">Title</label>
                  <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.05] focus:outline-none focus:border-[#6E3AFF] text-white"
                    placeholder="Task title"
                  />
                </div>
                <div>
                  <label className="block text-white/60 mb-2">Description</label>
                  <textarea
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.05] focus:outline-none focus:border-[#6E3AFF] text-white h-32"
                    placeholder="Task description"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/60 mb-2">Priority</label>
                    <select
                      value={newTask.priority}
                      onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as Task['priority'] })}
                      className="w-full p-2 rounded-lg bg-[#0B0A1F] text-white border border-[#6E3AFF]/50 focus:border-[#6E3AFF] focus:outline-none [&>option]:bg-[#0B0A1F] [&>option]:text-white"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 mb-2">Due Date</label>
                    <input
                      type="date"
                      value={newTask.dueDate}
                      onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                      className="w-full p-2 rounded-lg bg-[#0B0A1F] text-white border border-[#6E3AFF]/50 focus:border-[#6E3AFF] focus:outline-none [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-4 mt-8">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 rounded-lg border border-white/20 text-white/60 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddTask}
                    className="purple-button px-6 py-2"
                    disabled={!newTask.title}
                  >
                    Create Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 
