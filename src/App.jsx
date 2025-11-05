import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SongList from './components/SongList';
import PlayerBar from './components/PlayerBar';

export default function App() {
  const [showAdd, setShowAdd] = useState(false);
  // Note: AddSongModal exists in the project for extended flows, but this
  // simplified composition keeps to 3–4 core components as requested.

  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-hidden">
      {/* Top navigation */}
      <Navbar />

      {/* Hero with Spline cover */}
      <div className="px-0">
        <Hero onAddSong={() => setShowAdd(true)} />
      </div>

      {/* Content */}
      <main className="relative">
        <div className="px-6 sm:px-8 md:px-10 lg:px-12 py-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Your Songs</h2>
            <button
              onClick={() => setShowAdd(true)}
              className="bg-emerald-500 text-black font-semibold px-4 py-2 rounded hover:bg-emerald-400"
            >
              Add Song
            </button>
          </div>
          <SongList />
        </div>
      </main>

      {/* Global player */}
      <PlayerBar />
    </div>
  );
}
