import React from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';
import { usePlayerStore } from '../../store/playerStore';

const VolumeControl: React.FC = () => {
  const { volume, isMuted, setVolume, toggleMute } = usePlayerStore();

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 50 ? Volume1 : Volume2;

  return (
    <div className="flex items-center gap-2 group w-32">
      <button 
        onClick={toggleMute}
        className="text-gray-400 hover:text-white transition-colors p-1"
      >
        <VolumeIcon size={20} />
      </button>
      <div className="relative flex-1 flex items-center h-4">
        <input
          type="range"
          min="0"
          max="100"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="absolute w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer z-10 accent-[#38BDF8]"
        />
        <div 
          className="absolute h-1 bg-[#38BDF8] rounded-full pointer-events-none group-hover:bg-[#60A5FA]"
          style={{ width: `${isMuted ? 0 : volume}%` }}
        />
      </div>
    </div>
  );
};

export default VolumeControl;
