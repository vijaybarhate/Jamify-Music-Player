import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Repeat1 } from 'lucide-react';
import { usePlayerStore } from '../../store/playerStore';
import { motion } from 'framer-motion';

const PlayerControls: React.FC = () => {
  const {
    isPlaying,
    shuffle,
    repeatMode,
    play,
    pause,
    next,
    previous,
    toggleShuffle,
    setRepeatMode,
  } = usePlayerStore();

  const handleRepeatClick = () => {
    if (repeatMode === 'none') setRepeatMode('all');
    else if (repeatMode === 'all') setRepeatMode('one');
    else setRepeatMode('none');
  };

  return (
    <div className="flex items-center gap-6">
      <button
        onClick={toggleShuffle}
        className={`text-text-sub hover:text-text transition-colors ${shuffle ? 'text-brand' : ''}`}
      >
        <Shuffle size={18} />
      </button>

      <button
        onClick={previous}
        className="text-text-sub hover:text-text transition-colors"
      >
        <SkipBack size={24} fill="currentColor" />
      </button>

      <motion.button
        onClick={() => (isPlaying ? pause() : play())}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-brand text-black hover:scale-105 transition-transform"
      >
        {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-1" />}
      </motion.button>

      <button
        onClick={next}
        className="text-text-sub hover:text-text transition-colors"
      >
        <SkipForward size={24} fill="currentColor" />
      </button>

      <button
        onClick={handleRepeatClick}
        className={`text-text-sub hover:text-text transition-colors ${repeatMode !== 'none' ? 'text-brand' : ''}`}
      >
        {repeatMode === 'one' ? <Repeat1 size={18} /> : <Repeat size={18} />}
      </button>
    </div>
  );
};

export default PlayerControls;