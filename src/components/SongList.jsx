import React, { useEffect, useMemo, useState } from 'react';
import { Play } from 'lucide-react';

export default function SongList() {
  const API_BASE = import.meta.env.VITE_BACKEND_URL;
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [current, setCurrent] = useState(null);

  const resolvedUrl = (path) => {
    if (!path) return '';
    // If the backend returned a relative path (e.g., /media/...), prefix with API base
    if (path.startsWith('/')) return `${API_BASE}${path}`;
    return path;
  };

  const fetchSongs = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/songs`);
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json();
      setSongs(data);
    } catch (err) {
      setError('Could not load songs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchSongs(); }, []);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white text-2xl font-bold">Your Songs</h2>
        <button onClick={fetchSongs} className="text-white/70 hover:text-white text-sm">Refresh</button>
      </div>

      {loading && <p className="text-white/60">Loading songs…</p>}
      {error && <p className="text-red-400">{error}</p>}

      {!loading && songs.length === 0 && (
        <p className="text-white/60">No songs added yet. Use the Add Song button to get started.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {songs.map((s) => (
          <div key={s.id} className="group bg-white/5 hover:bg-white/10 transition rounded-lg overflow-hidden">
            <div className="relative">
              <img
                src={s.coverUrl || `https://picsum.photos/seed/${s.id}/400/400`}
                alt={s.title}
                className="w-full aspect-square object-cover"
              />
              <button
                onClick={() => setCurrent(s)}
                className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition bg-emerald-500 text-black rounded-full p-3 shadow-lg"
                aria-label={`Play ${s.title}`}
              >
                <Play size={18} />
              </button>
            </div>
            <div className="p-3">
              <h3 className="font-medium truncate">{s.title}</h3>
              <p className="text-white/60 text-sm truncate">{s.artist}{s.album ? ` • ${s.album}` : ''}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Simple inline player for selected track */}
      {current && (
        <div className="mt-2 p-3 border border-white/10 rounded bg-white/5">
          <p className="text-sm text-white/80">Now playing: <span className="font-medium text-white">{current.title}</span> — {current.artist}</p>
          <audio src={resolvedUrl(current.audioUrl)} controls autoPlay className="mt-2 w-full" />
        </div>
      )}
    </section>
  );
}
