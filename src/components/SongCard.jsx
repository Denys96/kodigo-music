import { Play, Pause } from 'lucide-react';

const SongCard = ({ song, onPlay, isPlaying, isCurrentSong }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors group cursor-pointer">
      <div className="relative mb-4">
        <img
          src={song.cover}
          alt={song.title}
          className="w-full aspect-square object-cover rounded-lg"
        />
        <button
          onClick={() => onPlay(song)}
          className="absolute bottom-2 right-2 bg-green-500 text-black rounded-full p-3 opacity-0 group-hover:opacity-100 hover:scale-105 transition-all shadow-lg"
        >
          {isCurrentSong && isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
      <h3 className="text-white font-medium truncate mb-1">{song.title}</h3>
      <p className="text-gray-400 text-sm truncate">{song.artist}</p>
    </div>
  );
};

export default SongCard;
