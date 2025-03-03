'use client';

import { useState } from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function Notes() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Project Ideas',
      content: 'List of potential features for the next sprint...',
      createdAt: '2024-02-28T10:00:00Z',
      updatedAt: '2024-02-28T10:00:00Z',
    },
    {
      id: '2',
      title: 'Meeting Notes',
      content: 'Discussion points from the team meeting...',
      createdAt: '2024-02-27T15:30:00Z',
      updatedAt: '2024-02-27T15:30:00Z',
    },
  ]);

  const addNote = () => {
    const newNote: Note = {
      id: Date.now().toString(),
      title: 'New Note',
      content: '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="ml-20 md:ml-64 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Notes</h1>
          <button onClick={addNote} className="purple-button min-w-[160px] w-[160px] flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            New Note
          </button>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div key={note.id} className="glass-effect p-6 rounded-xl hover:border-[#6E3AFF]/20 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{note.title}</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-white/60 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="p-2 text-white/60 hover:text-red-400 transition-colors" onClick={() => deleteNote(note.id)}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-white/60 line-clamp-3">{note.content}</p>
              <p className="mt-4 text-sm text-white/40">
                Last updated: {new Date(note.updatedAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 