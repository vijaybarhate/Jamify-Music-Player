import React, { useState } from 'react';
import { ListMusic, Maximize2, Heart } from 'lucide-react';
import { usePlayerStore } from '../../store/playerStore';
import PlayerControls from './PlayerControls';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import { motion, AnimatePresence } from 'framer-motion';
import QueueDrawer from '../queue/QueueDrawer';
import ExpandedPlayer from './ExpandedPlayer';

const BottomPlayer: React.FC = () => {
  const { currentTrack, setExpanded, likedSongs, toggleLike } = usePlayerStore();
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const isLiked = currentTrack ? likedSongs.some(t => t.id === currentTrack.id) : false;

  return (
    <>
      <AnimatePresence>
        {currentTrack && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 md:pb-6 md:px-6 pointer-events-none"
          >
            <div className="max-w-[1400px] mx-auto bg-[#0B1020]/80 backdrop-blur-2xl border border-white/5 rounded-2xl md:rounded-3xl p-3 md:p-4 flex items-center justify-between gap-4 md:gap-8 shadow-2xl shadow-black/50 pointer-events-auto">
              
              {/* Track Info */}
              <div className="flex items-center gap-3 min-w-0 flex-1 md:flex-none md:w-1/4">
                <div 
                  onClick={() => setExpanded(true)}
                  className="relative group flex-shrink-0 cursor-pointer"
                >
                  <motion.img 
                    layoutId="artwork"
                    src={currentTrack.thumbnail} 
                    alt={currentTrack.title}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <Maximize2 size={16} className="text-white" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 
                    onClick={() => setExpanded(true)}
                    className="text-sm font-semibold truncate text-white leading-tight cursor-pointer hover:text-[#38BDF8] transition-colors"
                  >
                    {currentTrack.title}
                  </h4>
                  <p className="text-xs text-gray-400 truncate mt-0.5">
                    {currentTrack.artist}
                  </p>
                </div>
                <button 
                  onClick={() => toggleLike(currentTrack)}
                  className={`p-2 transition-colors ${isLiked ? 'text-[#38BDF8]' : 'text-gray-500 hover:text-white'}`}
                >
                  <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Controls & Progress */}
              <div className="hidden md:flex flex-col items-center gap-2 flex-1 max-w-2xl">
                <PlayerControls />
                <ProgressBar />
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-4 md:w-1/4 justify-end">
                {/* Mobile Only Controls */}
                <div className="md:hidden">
                  <PlayerControls />
                </div>

                <div className="hidden md:flex items-center gap-4">
                  <button 
                    onClick={() => setIsQueueOpen(true)}
                    className={`transition-colors ${isQueueOpen ? 'text-[#38BDF8]' : 'text-gray-400 hover:text-white'}`}
                  >
                    <ListMusic size={20} />
                  </button>
                  <VolumeControl />
                </div>
              </div>
            </div>

            {/* Mobile Progress Bar - Floating above player */}
            <div className="md:hidden absolute top-0 left-8 right-8 h-0.5">
              <ProgressBar />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <QueueDrawer isOpen={isQueueOpen} onClose={() => setIsQueueOpen(false)} />
      <ExpandedPlayer />
    </>
  );
};

export default BottomPlayer;
