import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onAddSong }) {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden rounded-b-2xl">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient and vignette overlays - ensure they don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_45%,rgba(0,0,0,0.6)_100%)]" />

      <div className="relative z-10 h-full flex items-end sm:items-center">
        <div className="px-6 sm:px-10 md:px-14 pb-8 sm:pb-0">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-white/70 mb-2">Automotive • Sports • Dynamic</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Feel the Drive. Stream at Full Throttle.
          </h1>
          <p className="mt-3 text-white/80 max-w-xl">
            SanMusic blends high‑energy motion with a sleek, corporate edge. Drop your tracks, hit play, and get moving.
          </p>
          {onAddSong && (
            <button
              onClick={onAddSong}
              className="mt-6 inline-flex items-center gap-2 bg-emerald-500 text-black font-semibold px-5 py-3 rounded-md hover:bg-emerald-400 transition"
            >
              Add Song
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
