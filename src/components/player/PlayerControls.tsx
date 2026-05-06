import React from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Shuffle, 
  Repeat, 
  Repeat1 
} from 'lucide-react';
import { usePlayerStore } from '../../store/playerStore';

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
    setRepeatMode 
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
        className={`transition-colors ${shuffle ? 'text-[#38BDF8]' : 'text-gray-500 hover:text-white'}`}
      >
        <Shuffle size={18} />
      </button>

      <button 
        onClick={previous}
        className="text-gray-400 hover:text-white transition-colors"
      >
        <SkipBack size={24} fill="currentColor" />
      </button>

      <button 
        onClick={() => isPlaying ? pause() : play()}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform"
      >
        {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-1" />}
      </button>

      <button 
        onClick={next}
        className="text-gray-400 hover:text-white transition-colors"
      >
        <SkipForward size={24} fill="currentColor" />
      </button>

      <button 
        onClick={handleRepeatClick}
        className={`transition-colors ${repeatMode !== 'none' ? 'text-[#38BDF8]' : 'text-gray-500 hover:text-white'}`}
      >
        {repeatMode === 'one' ? <Repeat1 size={18} /> : <Repeat size={18} />}
      </button>
    </div>
  );
};

export default PlayerControls;
