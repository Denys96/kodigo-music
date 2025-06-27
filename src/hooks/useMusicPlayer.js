import { useState } from 'react';

export const useMusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playPause = () => setIsPlaying(!isPlaying);

  const selectSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    playPause,
    selectSong,
    setCurrentTime
  };
};
