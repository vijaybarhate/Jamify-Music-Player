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
          className="fixed inset-0 z-[100] bg-[#050816] flex flex-col"
        >
          {/* Dynamic Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className="absolute inset-0 scale-150 blur-[100px] opacity-30 transition-all duration-1000"
              style={{
                background: `radial-gradient(circle at center, #38BDF8, #8B5CF6, #050816)`
              }}
            />
          </div>

          {/* Header */}
          <div className="relative z-10 p-6 flex items-center justify-between">
            <button 
              onClick={() => setExpanded(false)}
              className="p-2 text-white/60 hover:text-white transition-colors bg-white/5 rounded-full"
            >
              <ChevronDown size={28} />
            </button>
            <div className="text-center">
              <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Now Playing</p>
              <p className="text-xs font-semibold text-white/80">{currentTrack.artist}</p>
            </div>
            <button className="p-2 text-white/60 hover:text-white transition-colors">
              <Share2 size={24} />
            </button>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 md:flex-row md:gap-20 md:max-w-6xl md:mx-auto w-full">
            {/* Artwork */}
            <motion.div 
              layoutId="artwork"
              className="w-full aspect-square max-w-[400px] shadow-2xl shadow-black/50 rounded-3xl overflow-hidden mb-12 md:mb-0"
            >
              <img 
                src={currentTrack.thumbnail} 
                alt={currentTrack.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Info & Controls */}
            <div className="w-full max-w-[500px]">
              <div className="flex items-center justify-between mb-8">
                <div className="min-w-0">
                  <h1 className="text-3xl md:text-5xl font-black text-white truncate mb-2">
                    {currentTrack.title}
                  </h1>
                  <p className="text-lg md:text-xl text-[#38BDF8] font-semibold opacity-80">
                    {currentTrack.artist}
                  </p>
                </div>
                <button 
                  onClick={() => toggleLike(currentTrack)}
                  className={`p-3 rounded-full transition-all ${isLiked ? 'text-[#38BDF8] bg-[#38BDF8]/10' : 'text-white/40 hover:text-white'}`}
                >
                  <Heart size={32} fill={isLiked ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="mb-12">
                <ProgressBar />
              </div>

              <div className="flex flex-col items-center gap-10">
                <div className="scale-125">
                  <PlayerControls />
                </div>
                
                <div className="w-full flex items-center justify-between gap-8 pt-6 border-t border-white/5">
                  <button className="text-white/40 hover:text-white">
                    <ListMusic size={24} />
                  </button>
                  <div className="flex-1 max-w-[200px]">
                    <VolumeControl />
                  </div>
                  <button className="text-white/40 hover:text-white">
                    <MoreHorizontal size={24} />
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
