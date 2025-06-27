import React, { useState } from 'react';
import SongCard from '../components/SongCard.jsx';
import { mockSongs } from '../utils/mockData.js';

const SearchPage = ({ musicPlayer }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = mockSongs.filter(song =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Buscar Canciones</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full max-w-md mx-auto bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Buscar por canción o artista..."
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Resultados</h2>
        {filteredSongs.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSongs.map(song => (
              <SongCard
                key={song.id}
                song={song}
                onPlay={musicPlayer.selectSong}
                isPlaying={musicPlayer.isPlaying}
                isCurrentSong={musicPlayer.currentSong?.id === song.id}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
