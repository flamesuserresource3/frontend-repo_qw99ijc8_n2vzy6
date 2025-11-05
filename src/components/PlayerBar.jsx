import React, { useState } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Volume2,
  List,
  Mic2,
  MonitorSpeaker,
  Laptop,
  Maximize2,
} from 'lucide-react';

export default function PlayerBar() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(20);
  const [volume, setVolume] = useState(70);

  return (
    <div className="fixed bottom-0 inset-x-0 h-20 bg-zinc-900/95 backdrop-blur border-t border-white/10">
      <div className="h-full px-3 sm:px-5 grid grid-cols-3 gap-4 items-center">
        {/* Left: current track */}
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=200&auto=format&fit=crop"
            alt="cover"
            className="h-14 w-14 rounded"
          />
          <div className="min-w-0">
            <p className="text-white text-sm truncate">Never Gonna Give You Up</p>
            <p className="text-white/60 text-xs truncate">Rick Astley</p>
          </div>
        </div>

        {/* Center: controls */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <button className="text-white/70 hover:text-white"><Shuffle size={18} /></button>
            <button className="text-white/70 hover:text-white"><SkipBack size={20} /></button>
            <button
              className="bg-white text-black rounded-full p-3 hover:scale-105 transition"
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? 'Pause' : 'Play'}
            >
              {playing ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button className="text-white/70 hover:text-white"><SkipForward size={20} /></button>
            <button className="text-white/70 hover:text-white"><Repeat size={18} /></button>
          </div>
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-white/50 text-xs w-8 text-right">1:23</span>
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
            <span className="text-white/50 text-xs w-8">3:45</span>
          </div>
        </div>

        {/* Right: extra */}
        <div className="hidden sm:flex items-center justify-end gap-3">
          <button className="text-white/70 hover:text-white"><Mic2 size={18} /></button>
          <button className="text-white/70 hover:text-white"><List size={18} /></button>
          <button className="text-white/70 hover:text-white"><MonitorSpeaker size={18} /></button>
          <button className="text-white/70 hover:text-white"><Laptop size={18} /></button>
          <div className="flex items-center gap-2 w-32">
            <Volume2 size={18} className="text-white/70" />
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full accent-emerald-500"
            />
          </div>
          <button className="text-white/70 hover:text-white"><Maximize2 size={18} /></button>
        </div>
      </div>
    </div>
  );
}
