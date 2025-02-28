'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Registration {
  id: string;
  name: string;
  email: string;
  company: string | null;
  role: string | null;
  registered_at: string;
}

export default function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const response = await fetch('/api/admin/registrations');
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch registrations');
      }

      setRegistrations(data.registrations);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load registrations');
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = () => {
    // Convert registrations to CSV
    const headers = ['Name', 'Email', 'Company', 'Role', 'Registered At'];
    const csvContent = [
      headers.join(','),
      ...registrations.map(reg => [
        reg.name,
        reg.email,
        reg.company || '',
        reg.role || '',
        new Date(reg.registered_at).toLocaleString()
      ].join(','))
    ].join('\n');

    // Create and download the CSV file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `registrations_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="glass-effect p-8 rounded-2xl">
            <h1 className="text-2xl font-bold text-red-400 mb-4">Error</h1>
            <p className="text-white/60 mb-6">{error}</p>
            <button
              onClick={fetchRegistrations}
              className="purple-button"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-white/60">
              Manage pre-registrations and export data
            </p>
          </div>
          <button
            onClick={handleExport}
            className="purple-button"
          >
            Export to CSV
          </button>
        </div>

        <div className="glass-effect rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/60">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/60">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/60">Company</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/60">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white/60">Registered</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg) => (
                  <tr key={reg.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-6 py-4 text-sm">{reg.name}</td>
                    <td className="px-6 py-4 text-sm">{reg.email}</td>
                    <td className="px-6 py-4 text-sm text-white/60">{reg.company || '-'}</td>
                    <td className="px-6 py-4 text-sm text-white/60">{reg.role || '-'}</td>
                    <td className="px-6 py-4 text-sm text-white/60">
                      {new Date(reg.registered_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
                {registrations.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-white/40">
                      No registrations yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 