import React from 'react';
import { Home, Search, Library, Plus, Heart } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active }) => (
  <button
    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition w-full text-left ${
      active ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'
    }`}
  >
    <Icon size={20} />
    <span>{label}</span>
  </button>
);

export default function Sidebar() {
  const playlists = [
    'Daily Mix 1',
    'Chill Vibes',
    'Top Hits',
    'Focus Flow',
    'Workout Pump',
    'Throwback',
  ];

  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 shrink-0 h-full flex-col gap-3 p-3 bg-black/30">
      <div className="rounded-lg bg-zinc-900/70 border border-white/5 p-2 space-y-1">
        <NavItem icon={Home} label="Home" active />
        <NavItem icon={Search} label="Search" />
      </div>

      <div className="rounded-lg bg-zinc-900/70 border border-white/5 p-3">
        <div className="flex items-center justify-between text-white/70 mb-3">
          <div className="flex items-center gap-2">
            <Library size={18} />
            <span className="text-sm">Your Library</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1.5 rounded hover:bg-white/10">
              <Plus size={16} className="text-white/70" />
            </button>
            <button className="p-1.5 rounded hover:bg-white/10">
              <Heart size={16} className="text-white/70" />
            </button>
          </div>
        </div>

        <div className="space-y-1 max-h-[50vh] overflow-auto pr-1">
          {playlists.map((p) => (
            <button
              key={p}
              className="w-full text-left text-white/80 hover:text-white hover:bg-white/5 px-2 py-2 rounded transition"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto text-xs text-white/40 px-2">
        <p>© {new Date().getFullYear()} SanMusic</p>
      </div>
    </aside>
  );
}
