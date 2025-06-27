import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react';

const MusicPlayer = ({ currentSong, isPlaying, playPause }) => {
  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-4 z-30">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-4 min-w-0 flex-1">
          <img
            src={currentSong.cover}
            alt={currentSong.title}
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <p className="text-white font-medium truncate">{currentSong.title}</p>
            <p className="text-gray-400 text-sm truncate">{currentSong.artist}</p>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <Heart size={16} />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipBack size={20} />
          </button>
          <button
            onClick={playPause}
            className="bg-white text-black rounded-full p-2 hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <SkipForward size={20} />
          </button>
        </div>

        <div className="flex items-center gap-2 min-w-0 flex-1 justify-end">
          <Volume2 size={16} className="text-gray-400" />
          <div className="w-20 bg-gray-600 rounded-full h-1">
            <div className="bg-white h-1 rounded-full w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
