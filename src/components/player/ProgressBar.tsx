import React, { useState, useEffect } from 'react';
import { usePlayerStore } from '../../store/playerStore';
import { formatTime } from '../../utils/formatTime';

const ProgressBar: React.FC = () => {
  const { progress, duration, seek } = usePlayerStore();
  const [isDragging, setIsDragging] = useState(false);
  const [localValue, setLocalValue] = useState(progress);

  useEffect(() => {
    if (!isDragging) setLocalValue(progress);
  }, [progress, isDragging]);

  const pct = duration > 0 ? ((isDragging ? localValue : progress) / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-3 w-full group">
      <span className="text-xs text-text-sub font-mono tabular-nums w-10 text-right">
        {formatTime(isDragging ? localValue : progress)}
      </span>

      <div className="relative flex-1 flex items-center h-6">
        <input
          type="range"
          min="0"
          max={duration || 100}
          value={isDragging ? localValue : progress}
          onInput={(e) => {
            setIsDragging(true);
            setLocalValue(Number(e.currentTarget.value));
          }}
          onChange={(e) => {
            seek(Number(e.currentTarget.value));
            setIsDragging(false);
          }}
          className="absolute w-full z-10"
        />
        <div className="absolute w-full h-1 bg-surface-light rounded-full group-hover:h-1.5 transition-all" />
        <div
          className="absolute h-1 bg-brand rounded-full pointer-events-none group-hover:h-1.5 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>

      <span className="text-xs text-text-sub font-mono tabular-nums w-10">
        {formatTime(duration)}
      </span>
    </div>
  );
};

export default ProgressBar;