import React, { useState, useEffect } from 'react';
import { usePlayerStore } from '../../store/playerStore';
import { formatTime } from '../../utils/formatTime';

const ProgressBar: React.FC = () => {
  const { progress, duration, seek } = usePlayerStore();
  const [isDragging, setIsDragging] = useState(false);
  const [localValue, setLocalValue] = useState(progress);

  // Sync local value with store progress when not dragging
  useEffect(() => {
    if (!isDragging) {
      setLocalValue(progress);
    }
  }, [progress, isDragging]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDragging(true);
    setLocalValue(Number(e.target.value));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    seek(newValue);
    setIsDragging(false);
  };

  return (
    <div className="flex items-center gap-3 w-full group">
      <span className="text-[10px] text-gray-500 font-medium tabular-nums w-8">
        {formatTime(isDragging ? localValue : progress)}
      </span>
      <div className="relative flex-1 flex items-center h-4">
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={isDragging ? localValue : progress}
          onInput={handleInput}
          onChange={handleChange}
          className="absolute w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer z-10 accent-[#38BDF8]"
        />
        <div 
          className="absolute h-1 bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] rounded-full pointer-events-none group-hover:from-[#60A5FA] group-hover:to-[#A78BFA]"
          style={{ width: `${((isDragging ? localValue : progress) / (duration || 1)) * 100}%` }}
        />
      </div>
      <span className="text-[10px] text-gray-500 font-medium tabular-nums w-8">
        {formatTime(duration)}
      </span>
    </div>
  );
};

export default ProgressBar;
