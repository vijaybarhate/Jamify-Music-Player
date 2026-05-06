import React from 'react';
import { Play, MoreVertical, Heart } from 'lucide-react';
import { Track } from '../../types';
import { usePlayerStore } from '../../store/playerStore';
import { motion } from 'framer-motion';

interface SongCardProps {
  track: Track;
  context?: Track[];
}

const SongCard: React.FC<SongCardProps> = ({ track, context }) => {
  const { play, currentTrack, isPlaying, likedSongs, toggleLike } = usePlayerStore();
  const isActive = currentTrack?.id === track.id;
  const isLiked = likedSongs.some((t) => t.id === track.id);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`
        relative group p-4 rounded-2xl transition-all duration-300 border border-transparent
        ${isActive ? 'bg-white/10 border-white/10 shadow-xl' : 'hover:bg-white/5 hover:border-white/5'}
      `}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg mb-4">
        <img 
          src={track.thumbnail} 
          alt={track.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={() => play(track, context)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#38BDF8] text-white shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            {isActive && isPlaying ? (
              <div className="flex gap-0.5 items-end h-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [8, 16, 8] }}
                    transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                    className="w-1 bg-white rounded-full"
                  />
                ))}
              </div>
            ) : (
              <Play size={24} fill="currentColor" className="ml-1" />
            )}
          </button>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(track);
          }}
          className={`
            absolute top-2 right-2 p-2 rounded-full backdrop-blur-md transition-all duration-300
            ${isLiked ? 'bg-[#38BDF8] text-white' : 'bg-black/20 text-white/60 hover:text-white opacity-0 group-hover:opacity-100'}
          `}
        >
          <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
        </button>

        {isActive && (
          <div className="absolute top-2 left-2 px-2 py-1 bg-[#38BDF8] text-white text-[10px] font-bold rounded-full shadow-lg">
            PLAYING
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className={`font-semibold text-sm truncate ${isActive ? 'text-[#38BDF8]' : 'text-white'}`}>
          {track.title}
        </h3>
        <p className="text-xs text-gray-500 truncate group-hover:text-gray-400 transition-colors">
          {track.artist}
        </p>
      </div>

      <button className="absolute bottom-4 right-4 p-1 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity hover:text-white">
        <MoreVertical size={16} />
      </button>

      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-br from-[#38BDF8]/20 to-[#8B5CF6]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </motion.div>
  );
};

export default SongCard;
