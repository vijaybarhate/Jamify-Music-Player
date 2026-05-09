import React from 'react';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';
import { usePlayerStore } from '../../store/playerStore';

const VolumeControl: React.FC = () => {
  const { volume, isMuted, setVolume, toggleMute } = usePlayerStore();

  const effectiveVol = isMuted ? 0 : volume;
  const VolumeIcon = effectiveVol === 0 ? VolumeX : effectiveVol < 50 ? Volume1 : Volume2;

  return (
    <div className="flex items-center gap-2 group w-28">
      <button
        onClick={toggleMute}
        className="text-text-sub hover:text-text transition-colors p-1"
      >
        <VolumeIcon size={18} />
      </button>

      <div className="relative flex-1 flex items-center h-5">
        <input
          type="range"
          min="0"
          max="100"
          value={effectiveVol}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="absolute w-full z-10"
        />
        <div className="absolute w-full h-1 bg-surface-light rounded-full" />
        <div
          className="absolute h-1 bg-brand rounded-full pointer-events-none"
          style={{ width: `${effectiveVol}%` }}
        />
      </div>
    </div>
  );
};

export default VolumeControl;