import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { usePlayerStore } from '../../store/playerStore';
import { motion, AnimatePresence } from 'framer-motion';

interface QueueDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const QueueDrawer: React.FC<QueueDrawerProps> = ({ isOpen, onClose }) => {
  const { queue, currentTrack, removeFromQueue, clearQueue } = usePlayerStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-bg-light z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Queue</h2>
                <p className="text-sm text-text-sub mt-1">{queue.length} tracks</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={clearQueue}
                  className="p-2 text-text-sub hover:text-red-500 transition-colors rounded-full hover:bg-white/5"
                  title="Clear Queue"
                >
                  <Trash2 size={20} />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-text-sub hover:text-text transition-colors rounded-full hover:bg-white/5"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {queue.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-text-sub">
                  <p className="text-sm">Your queue is empty</p>
                </div>
              ) : (
                queue.map((track, index) => (
                  <motion.div
                    key={`${track.id}-${index}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className={`
                      group flex items-center gap-3 p-2.5 rounded-lg transition-colors cursor-pointer
                      ${currentTrack?.id === track.id ? 'bg-white/10' : 'hover:bg-white/5'}
                    `}
                  >
                    <span className={`text-xs font-mono w-5 text-center tabular-nums ${
                      currentTrack?.id === track.id ? 'text-brand' : 'text-text-sub'
                    }`}>
                      {index + 1}
                    </span>

                    <div className="w-10 h-10 flex-shrink-0 rounded overflow-hidden">
                      <img
                        src={track.thumbnail}
                        alt={track.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-semibold truncate ${
                        currentTrack?.id === track.id ? 'text-brand' : 'text-text'
                      }`}>
                        {track.title}
                      </h4>
                      <p className="text-xs text-text-sub truncate">{track.artist}</p>
                    </div>

                    <button
                      onClick={() => removeFromQueue(track.id)}
                      className="p-1 text-text-sub hover:text-text opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <X size={14} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {/* Now Playing Footer */}
            {currentTrack && (
              <div className="p-4 border-t border-white/10 bg-bg">
                <p className="text-xs font-bold text-text-sub uppercase tracking-widest mb-3">
                  Now Playing
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={currentTrack.thumbnail}
                    className="w-14 h-14 rounded-md object-cover"
                    alt=""
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-bold text-brand truncate">{currentTrack.title}</h4>
                    <p className="text-sm text-text-sub truncate">{currentTrack.artist}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QueueDrawer;