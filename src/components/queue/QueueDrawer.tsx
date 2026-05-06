import React from 'react';
import { X, Trash2, GripVertical } from 'lucide-react';
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0B1020] border-l border-white/5 z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-white/5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Queue</h2>
                <p className="text-sm text-gray-500">{queue.length} tracks</p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={clearQueue}
                  className="p-2 text-gray-500 hover:text-red-400 transition-colors"
                  title="Clear Queue"
                >
                  <Trash2 size={20} />
                </button>
                <button 
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white transition-colors bg-white/5 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-2">
              {queue.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                  <p>Your queue is empty</p>
                </div>
              ) : (
                queue.map((track, index) => (
                  <div 
                    key={`${track.id}-${index}`}
                    className={`
                      group flex items-center gap-4 p-3 rounded-xl transition-all
                      ${currentTrack?.id === track.id ? 'bg-white/10 ring-1 ring-white/10' : 'hover:bg-white/5'}
                    `}
                  >
                    <div className="text-xs font-medium text-gray-600 w-4">
                      {index + 1}
                    </div>
                    <div className="relative w-12 h-12 flex-shrink-0">
                      <img 
                        src={track.thumbnail} 
                        alt={track.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      {currentTrack?.id === track.id && (
                        <div className="absolute inset-0 bg-[#38BDF8]/40 flex items-center justify-center rounded-lg">
                          <div className="flex gap-0.5 items-end h-3">
                            {[1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                animate={{ height: [4, 10, 4] }}
                                transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                                className="w-0.5 bg-white rounded-full"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-sm font-semibold truncate ${currentTrack?.id === track.id ? 'text-[#38BDF8]' : 'text-white'}`}>
                        {track.title}
                      </h4>
                      <p className="text-xs text-gray-500 truncate">{track.artist}</p>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => removeFromQueue(track.id)}
                        className="p-2 text-gray-500 hover:text-white"
                      >
                        <X size={16} />
                      </button>
                      <div className="p-2 text-gray-700 cursor-grab">
                        <GripVertical size={16} />
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {currentTrack && (
              <div className="p-6 border-t border-white/5 bg-white/5">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Now Playing</p>
                <div className="flex items-center gap-4">
                  <img src={currentTrack.thumbnail} className="w-16 h-16 rounded-xl object-cover shadow-lg" alt="" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-[#38BDF8] truncate">{currentTrack.title}</h4>
                    <p className="text-sm text-gray-400 truncate">{currentTrack.artist}</p>
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
