import React from 'react';
import { Search, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-sm bg-emerald-500 flex items-center justify-center font-bold text-white">
            S
          </div>
          <span className="text-white font-semibold tracking-tight">SanMusic</span>
        </div>

        <div className="hidden md:flex items-center max-w-xl w-full mx-6">
          <div className="flex items-center gap-2 w-full bg-white/10 border border-white/10 rounded-full px-3 py-2 focus-within:ring-2 ring-emerald-500/50">
            <Search size={18} className="text-white/70" />
            <input
              type="text"
              placeholder="What do you want to play?"
              className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/50"
            />
          </div>
        </div>

        <button className="flex items-center gap-2 text-white/80 hover:text-white transition">
          <User size={20} />
          <span className="hidden sm:inline">Profile</span>
        </button>
      </div>
    </header>
  );
}
