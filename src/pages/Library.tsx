import React from 'react';
import { Library as LibraryIcon, Heart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePlayerStore } from '../store/playerStore';
import SongCard from '../components/cards/SongCard';
import { useLocation } from 'react-router-dom';

const Library: React.FC = () => {
  const { likedSongs, recentlyPlayed } = usePlayerStore();
  const location = useLocation();
  const path = location.pathname;

  const isFavorites = path === '/favorites';
  const isRecent = path === '/recent';

  if (isFavorites) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-12 px-6"
      >
        <div className="flex items-end gap-6 mb-12">
          <div className="w-48 h-48 bg-gradient-to-br from-[#8B5CF6] to-[#38BDF8] rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
            <Heart size={80} fill="white" className="text-white" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-2">Playlist</p>
            <h1 className="text-6xl font-black mb-4">Liked Songs</h1>
            <p className="text-gray-400 font-medium">{likedSongs.length} songs</p>
          </div>
        </div>

        {likedSongs.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {likedSongs.map((track) => (
              <SongCard key={track.id} track={track} context={likedSongs} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-500">
              <Heart size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">No liked songs yet</h3>
            <p className="text-gray-500">Songs you like will appear here.</p>
          </div>
        )}
      </motion.div>
    );
  }

  if (isRecent) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-12 px-6"
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-white/5 rounded-2xl text-[#38BDF8]">
            <Clock size={32} />
          </div>
          <h1 className="text-4xl font-black">Recently Played</h1>
        </div>

        {recentlyPlayed.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {recentlyPlayed.map((track) => (
              <SongCard key={track.id} track={track} context={recentlyPlayed} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-500">
              <Clock size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">History is empty</h3>
            <p className="text-gray-500">Your recently played tracks will show up here.</p>
          </div>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6"
    >
      <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-8 text-[#38BDF8]">
        <LibraryIcon size={48} />
      </div>
      <h1 className="text-4xl font-black mb-4">Your Library</h1>
      <p className="text-gray-500 max-w-md text-lg">
        Keep track of your favorite artists, albums, and playlists here.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 w-full max-w-lg">
        <button className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-left group">
          <Heart className="text-[#38BDF8] mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-xl">Liked Songs</h3>
          <p className="text-gray-500 text-sm">{likedSongs.length} tracks</p>
        </button>
        <button className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all text-left group">
          <Clock className="text-[#8B5CF6] mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-bold text-xl">Recently Played</h3>
          <p className="text-gray-500 text-sm">{recentlyPlayed.length} tracks</p>
        </button>
      </div>
    </motion.div>
  );
};

export default Library;
