import React from 'react';
import { ChevronDown, Share2, ListMusic, Heart, MoreHorizontal } from 'lucide-react';
import { usePlayerStore } from '../../store/playerStore';
import PlayerControls from './PlayerControls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import { motion, AnimatePresence } from 'framer-motion';

const ExpandedPlayer: React.FC = () => {
  const { currentTrack, isExpanded, setExpanded, likedSongs, toggleLike } = usePlayerStore();
  const isLiked = currentTrack ? likedSongs.some(t => t.id === currentTrack.id) : false;

  if (!currentTrack) return null;

  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          className="fixed inset-0 z-[100] bg-bg flex flex-col"
        >
          {/* Background with gradient */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  radial-gradient(circle at 30% 20%, rgba(29, 185, 84, 0.15) 0%, transparent 40%),
                  radial-gradient(circle at 70% 80%, rgba(29, 185, 84, 0.1) 0%, transparent 40%),
                  linear-gradient(180deg, rgba(29, 185, 84, 0.05) 0%, #191414 100%)
                `,
              }}
            />
          </div>

          {/* Header */}
          <div className="relative z-10 p-6 flex items-center justify-between">
            <button
              onClick={() => setExpanded(false)}
              className="p-2 text-text-sub hover:text-text transition-colors"
            >
              <ChevronDown size={28} />
            </button>
            <div className="text-center">
              <p className="text-xs font-bold text-text-sub uppercase tracking-widest">Now Playing</p>
              <p className="text-sm font-semibold text-text/70 mt-1">{currentTrack.artist}</p>
            </div>
            <button className="p-2 text-text-sub hover:text-text transition-colors">
              <Share2 size={24} />
            </button>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 md:flex-row md:gap-16 md:max-w-6xl md:mx-auto w-full">
            {/* Artwork */}
            <motion.div
              className="w-full aspect-square max-w-[400px] mb-10 md:mb-0"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
              >
                <img
                  src={currentTrack.thumbnail}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Info & Controls */}
            <div className="w-full max-w-[480px]">
              <div className="flex items-start justify-between mb-8">
                <div className="min-w-0 flex-1 pr-4">
                  <h1 className="text-3xl md:text-4xl font-bold text-text truncate mb-2">
                    {currentTrack.title}
                  </h1>
                  <p className="text-xl text-text-sub">
                    {currentTrack.artist}
                  </p>
                </div>
                <button
                  onClick={() => toggleLike(currentTrack)}
                  className={`p-3 rounded-full transition-all ${
                    isLiked
                      ? 'text-brand bg-brand/10'
                      : 'text-text-sub hover:text-text'
                  }`}
                >
                  <Heart size={28} fill={isLiked ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="mb-10">
                <ProgressBar />
              </div>

              <div className="flex flex-col items-center gap-8">
                <PlayerControls />

                <div className="w-full flex items-center justify-between gap-8 pt-6 border-t border-white/10">
                  <button className="text-text-sub hover:text-text transition-colors">
                    <ListMusic size={22} />
                  </button>
                  <div className="flex-1 max-w-[200px]">
                    <VolumeControl />
                  </div>
                  <button className="text-text-sub hover:text-text transition-colors">
                    <MoreHorizontal size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExpandedPlayer;