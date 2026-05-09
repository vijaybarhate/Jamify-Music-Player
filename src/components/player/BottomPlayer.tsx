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
            className="fixed bottom-16 md:bottom-0 left-0 right-0 z-40 px-4 pb-4 md:pb-2"
          >
            <div className="max-w-[1400px] mx-auto bg-bg-light/95 backdrop-blur-md border-t border-white/5 rounded-lg md:rounded-none p-3 flex items-center justify-between gap-4">
              {/* Track Info */}
              <div className="flex items-center gap-3 min-w-0 flex-1 md:flex-none md:w-1/4">
                <div
                  onClick={() => setExpanded(true)}
                  className="relative group flex-shrink-0 cursor-pointer"
                >
                  <img
                    src={currentTrack.thumbnail}
                    alt={currentTrack.title}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-md object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex items-center justify-center">
                    <Maximize2 size={16} className="text-white" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h4
                    onClick={() => setExpanded(true)}
                    className="text-sm font-semibold truncate text-text hover:text-brand cursor-pointer"
                  >
                    {currentTrack.title}
                  </h4>
                  <p className="text-xs text-text-sub truncate mt-0.5">
                    {currentTrack.artist}
                  </p>
                </div>
                <button
                  onClick={() => toggleLike(currentTrack)}
                  className={`p-2 transition-colors ${isLiked ? 'text-brand' : 'text-text-sub hover:text-text'}`}
                >
                  <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                </button>
              </div>

              {/* Controls */}
              <div className="hidden md:flex flex-col items-center gap-2 flex-1 max-w-2xl">
                <PlayerControls />
                <ProgressBar />
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4 md:w-1/4 justify-end">
                <div className="md:hidden">
                  <PlayerControls />
                </div>
                <div className="hidden md:flex items-center gap-4">
                  <button
                    onClick={() => setIsQueueOpen(true)}
                    className={`text-text-sub hover:text-text transition-colors ${isQueueOpen ? 'text-brand' : ''}`}
                  >
                    <ListMusic size={20} />
                  </button>
                  <VolumeControl />
                </div>
              </div>
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