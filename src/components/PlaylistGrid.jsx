import React from 'react';
import { Play } from 'lucide-react';

const playlists = [
  {
    id: 1,
    title: 'Daily Mix 1',
    description: 'Made for you',
    image: 'https://images.unsplash.com/photo-1581269632338-1e913f536380?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjIzNDkxNjZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Chill Hits',
    description: 'Keep calm & relax',
    image: 'https://images.unsplash.com/photo-1499424780482-d1f9f0d925cc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGlsbCUyMEhpdHN8ZW58MHwwfHx8MTc2MjM0OTE2Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Top 50 Global',
    description: 'The most played',
    image: 'https://images.unsplash.com/photo-1688760948635-d53d6ef32af6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUb3AlMjA1MCUyMEdsb2JhbHxlbnwwfDB8fHwxNzYyMzQ5MTY3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: 'Focus Flow',
    description: 'Deep work beats',
    image: 'https://images.unsplash.com/photo-1661591521424-d43ee8949ee3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGb2N1cyUyMEZsb3d8ZW58MHwwfHx8MTc2MjM0OTE2N3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 5,
    title: 'Workout Pump',
    description: 'Beast mode on',
    image: 'https://images.unsplash.com/photo-1571388072750-31a921b3d900?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXb3Jrb3V0JTIwUHVtcHxlbnwwfDB8fHwxNzYyMzQ5MTY4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Throwback',
    description: 'Back to classics',
    image: 'https://images.unsplash.com/photo-1705498305934-5a135983f90e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUaHJvd2JhY2t8ZW58MHwwfHx8MTc2MjM0OTE2OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

function Card({ item }) {
  return (
    <div className="group relative bg-white/5 hover:bg-white/10 transition rounded-lg overflow-hidden">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <h3 className="text-white font-medium truncate">{item.title}</h3>
        <p className="text-white/60 text-sm truncate">{item.description}</p>
      </div>
      <button className="absolute right-3 bottom-16 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-emerald-500 hover:bg-emerald-400 text-black rounded-full p-3 shadow-lg">
        <Play size={18} fill="currentColor" />
      </button>
    </div>
  );
}

export default function PlaylistGrid() {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-white text-2xl font-bold">Good afternoon</h2>
          <p className="text-white/60 text-sm">Your recent playlists</p>
        </div>
        <button className="text-white/70 hover:text-white text-sm">See all</button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {playlists.map((p) => (
          <Card key={p.id} item={p} />
        ))}
      </div>
    </section>
  );
}
