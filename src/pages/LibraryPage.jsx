import React from 'react';
import { User } from 'lucide-react';
import { mockSongs } from '../utils/mockData.js';

const LibraryPage = ({ musicPlayer }) => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-4">Tu Biblioteca</h1>
        <p className="text-gray-400">Tus canciones y artistas favoritos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-white font-bold text-lg mb-4">Canciones que te gustan</h3>
          <div className="space-y-3">
            {mockSongs.slice(0, 3).map(song => (
              <div 
                key={song.id}
                onClick={() => musicPlayer.selectSong(song)}
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors"
              >
                <img src={song.cover} alt={song.title} className="w-10 h-10 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{song.title}</p>
                  <p className="text-gray-400 text-xs truncate">{song.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-white font-bold text-lg mb-4">Reproducidas recientemente</h3>
          <div className="space-y-3">
            {mockSongs.slice(2, 5).map(song => (
              <div 
                key={song.id}
                onClick={() => musicPlayer.selectSong(song)}
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors"
              >
                <img src={song.cover} alt={song.title} className="w-10 h-10 rounded object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{song.title}</p>
                  <p className="text-gray-400 text-xs truncate">{song.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-white font-bold text-lg mb-4">Tus artistas</h3>
          <div className="space-y-3">
            {['Queen', 'Led Zeppelin', 'Eagles'].map(artist => (
              <div
                key={artist}
                className="flex items-center gap-3 p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <User size={16} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">{artist}</p>
                  <p className="text-gray-400 text-xs">Artista</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
