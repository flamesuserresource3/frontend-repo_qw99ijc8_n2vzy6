import React, { useState } from 'react';

export default function AddSongModal({ open, onClose, onAdded }) {
  const API_BASE = import.meta.env.VITE_BACKEND_URL;
  const [tab, setTab] = useState('url'); // 'url' | 'upload'

  // URL form state
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  // Upload form state
  const [uTitle, setUTitle] = useState('');
  const [uArtist, setUArtist] = useState('');
  const [uAlbum, setUAlbum] = useState('');
  const [uAudio, setUAudio] = useState(null);
  const [uCover, setUCover] = useState(null);

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!open) return null;

  const resetForms = () => {
    setTitle(''); setArtist(''); setAlbum(''); setCoverUrl(''); setAudioUrl('');
    setUTitle(''); setUArtist(''); setUAlbum(''); setUAudio(null); setUCover(null);
    setError(''); setSubmitting(false); setTab('url');
  };

  const handleSubmitUrl = async (e) => {
    e.preventDefault();
    setSubmitting(true); setError('');
    try {
      const res = await fetch(`${API_BASE}/songs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, artist, album: album || undefined, coverUrl: coverUrl || undefined, audioUrl }),
      });
      if (!res.ok) throw new Error(await res.text());
      onAdded?.();
      resetForms();
      onClose?.();
    } catch (err) {
      setError('Could not add song. Please check the links and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmitUpload = async (e) => {
    e.preventDefault();
    if (!uAudio) { setError('Please select an audio file.'); return; }
    setSubmitting(true); setError('');
    try {
      const form = new FormData();
      form.append('title', uTitle);
      form.append('artist', uArtist);
      if (uAlbum) form.append('album', uAlbum);
      form.append('audio', uAudio);
      if (uCover) form.append('cover', uCover);
      const res = await fetch(`${API_BASE}/songs/upload`, {
        method: 'POST',
        body: form,
      });
      if (!res.ok) throw new Error(await res.text());
      onAdded?.();
      resetForms();
      onClose?.();
    } catch (err) {
      setError('Upload failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-lg mx-auto bg-zinc-900 border border-white/10 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h3 className="text-lg font-semibold">Add a Song</h3>
          <button onClick={onClose} className="text-white/70 hover:text-white">✕</button>
        </div>

        <div className="px-5 pt-4">
          <div className="inline-flex bg-white/5 rounded-lg p-1">
            <button onClick={() => setTab('url')} className={`px-3 py-1.5 rounded-md text-sm ${tab==='url' ? 'bg-emerald-500 text-black' : 'text-white/80 hover:text-white'}`}>Paste URL</button>
            <button onClick={() => setTab('upload')} className={`px-3 py-1.5 rounded-md text-sm ${tab==='upload' ? 'bg-emerald-500 text-black' : 'text-white/80 hover:text-white'}`}>Upload File</button>
          </div>
        </div>

        {tab === 'url' ? (
          <form onSubmit={handleSubmitUrl} className="p-5 space-y-3">
            <div>
              <label className="block text-sm text-white/70 mb-1">Title</label>
              <input value={title} onChange={(e)=>setTitle(e.target.value)} required className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-emerald-500" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-white/70 mb-1">Artist</label>
                <input value={artist} onChange={(e)=>setArtist(e.target.value)} required className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Album (optional)</label>
                <input value={album} onChange={(e)=>setAlbum(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-emerald-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Cover Image URL (optional)</label>
              <input value={coverUrl} onChange={(e)=>setCoverUrl(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Audio URL</label>
              <input value={audioUrl} onChange={(e)=>setAudioUrl(e.target.value)} required className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-emerald-500" placeholder="https://...mp3" />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={onClose} className="px-3 py-2 text-sm text-white/80 hover:text-white">Cancel</button>
              <button disabled={submitting} className="px-4 py-2 text-sm font-semibold bg-emerald-500 text-black rounded disabled:opacity-50">{submitting ? 'Adding...' : 'Add Song'}</button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmitUpload} className="p-5 space-y-3">
            <div>
              <label className="block text-sm text-white/70 mb-1">Title</label>
              <input value={uTitle} onChange={(e)=>setUTitle(e.target.value)} required className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-emerald-500" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm text-white/70 mb-1">Artist</label>
                <input value={uArtist} onChange={(e)=>setUArtist(e.target.value)} required className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-1">Album (optional)</label>
                <input value={uAlbum} onChange={(e)=>setUAlbum(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 outline-none focus:border-emerald-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Audio File (MP3/WAV)</label>
              <input type="file" accept="audio/*" onChange={(e)=>setUAudio(e.target.files?.[0] || null)} required className="w-full" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Cover Image (optional)</label>
              <input type="file" accept="image/*" onChange={(e)=>setUCover(e.target.files?.[0] || null)} className="w-full" />
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={onClose} className="px-3 py-2 text-sm text-white/80 hover:text-white">Cancel</button>
              <button disabled={submitting} className="px-4 py-2 text-sm font-semibold bg-emerald-500 text-black rounded disabled:opacity-50">{submitting ? 'Uploading...' : 'Upload Song'}</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
