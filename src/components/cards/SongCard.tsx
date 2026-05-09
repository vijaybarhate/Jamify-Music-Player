import React from 'react';
import { Play, Heart } from 'lucide-react';
import { Track } from '../../types';
import { usePlayerStore } from '../../store/playerStore';
import { motion } from 'framer-motion';

interface SongCardProps {
  track: Track;
  context?: Track[];
}

const SongCard: React.FC<SongCardProps> = ({ track, context }) => {
  const { play, currentTrack, likedSongs, toggleLike } = usePlayerStore();
  const isActive = currentTrack?.id === track.id;
  const isLiked = likedSongs.some((t) => t.id === track.id);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`
        relative group p-3 rounded-lg transition-all cursor-pointer
        ${isActive ? 'bg-surface-light/50' : 'hover:bg-surface-light/30'}
      `}
      onClick={() => play(track, context)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg mb-3">
        <img
          src={track.thumbnail}
          alt={track.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-brand text-black shadow-lg"
          >
            {isActive ? (
              <div className="flex gap-0.5 items-end h-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [8, 16, 8] }}
                    transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.12 }}
                    className="w-1 bg-black rounded-full"
                  />
                ))}
              </div>
            ) : (
              <Play size={22} fill="currentColor" className="ml-1" />
            )}
          </motion.button>
        </div>

        {/* Playing badge */}
        {isActive && (
          <div className="absolute top-2 left-2 px-2 py-1 bg-brand text-black text-[10px] font-bold rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse" />
            PLAYING
          </div>
        )}
      </div>

      {/* Like button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleLike(track);
        }}
        className={`absolute top-5 right-5 p-1.5 rounded-full transition-all ${
          isLiked
            ? 'text-brand bg-black/50'
            : 'text-text/70 bg-black/50 opacity-0 group-hover:opacity-100 hover:text-brand'
        }`}
      >
        <Heart size={14} fill={isLiked ? "currentColor" : "none"} />
      </button>

      {/* Info */}
      <div className="space-y-0.5">
        <h3 className={`font-semibold text-sm truncate ${isActive ? 'text-brand' : 'text-text'}`}>
          {track.title}
        </h3>
        <p className="text-xs text-text-sub truncate group-hover:text-text/80">
          {track.artist}
        </p>
      </div>
    </motion.div>
  );
};

export default SongCard;