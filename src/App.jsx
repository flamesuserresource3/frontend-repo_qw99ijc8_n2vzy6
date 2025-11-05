import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import PlaylistGrid from './components/PlaylistGrid';
import PlayerBar from './components/PlayerBar';
import SongList from './components/SongList';
import AddSongModal from './components/AddSongModal';

export default function App() {
  const [addOpen, setAddOpen] = useState(false);

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-zinc-900 via-black to-black text-white overflow-hidden">
      {/* Top navigation */}
      <Navbar />

      {/* Main area */}
      <div className="h-[calc(100%-5rem)] md:h-[calc(100%-5rem)] grid grid-cols-1 md:grid-cols-[auto,1fr]">
        <Sidebar />

        <main className="relative h-full">
          <div className="absolute inset-0 overflow-y-auto">
            {/* Hero gradient */}
            <div className="h-48 bg-gradient-to-b from-emerald-700/60 via-emerald-700/20 to-transparent" />

            <div className="px-4 sm:px-6 -mt-20 pb-28 space-y-10">
              {/* Pinned section like Spotify */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <button
                    key={i}
                    className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 transition rounded overflow-hidden"
                  >
                    <img
                      src={`https://picsum.photos/seed/sanmusic-${i}/200/200`}
                      alt="cover"
                      className="h-16 w-16 object-cover"
                    />
                    <div className="flex-1 text-left pr-3">
                      <p className="text-white font-medium truncate">Liked Songs #{i}</p>
                      <p className="text-white/60 text-sm truncate">Playlist • SanMusic</p>
                    </div>
                    <div className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pr-3">
                      <span className="inline-block bg-emerald-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                        PLAY
                      </span>
                    </div>
                  </button>
                ))}
              </section>

              <PlaylistGrid />

              {/* User Songs with Add button */}
              <div className="flex items-center justify-between">
                <h2 className="text-white text-2xl font-bold">Add your music</h2>
                <button onClick={() => setAddOpen(true)} className="bg-emerald-500 text-black font-semibold px-4 py-2 rounded hover:bg-emerald-400">
                  Add Song
                </button>
              </div>
              <SongList />

              {/* Made for you */}
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-white text-2xl font-bold">Made for you</h2>
                  <button className="text-white/70 hover:text-white text-sm">See all</button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-white/5 hover:bg-white/10 transition rounded-lg overflow-hidden">
                      <img
                        src={`https://picsum.photos/seed/made-${i}/400/400`}
                        alt="mix"
                        className="w-full aspect-square object-cover"
                      />
                      <div className="p-3">
                        <h3 className="font-medium">Daily Mix {i}</h3>
                        <p className="text-white/60 text-sm">Your favorite artists</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>

      {/* Player */}
      <PlayerBar />

      <AddSongModal open={addOpen} onClose={() => setAddOpen(false)} onAdded={() => {}} />
    </div>
  );
}
