import React from 'react';
import SongCard from '../components/SongCard.jsx';
import { mockSongs } from '../utils/mockData.js';

const HomePage = ({ musicPlayer }) => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Bienvenido a Kodigo Music</h1>
        <p className="text-gray-400">Tu música favorita, en un solo lugar.</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Canciones populares</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockSongs.map(song => (
            <SongCard
              key={song.id}
              song={song}
              onPlay={musicPlayer.selectSong}
              isPlaying={musicPlayer.isPlaying}
              isCurrentSong={musicPlayer.currentSong?.id === song.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
