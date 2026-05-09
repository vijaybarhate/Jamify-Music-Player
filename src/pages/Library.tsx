import React from 'react';
import { Library as LibraryIcon, Heart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePlayerStore } from '../store/playerStore';
import SongCard from '../components/cards/SongCard';
import { useLocation, useNavigate } from 'react-router-dom';

const Library: React.FC = () => {
  const { likedSongs, recentlyPlayed } = usePlayerStore();
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  if (path === '/favorites') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 px-6">
        {/* Hero */}
        <div className="flex items-end gap-6 mb-10">
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-lg overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-brand to-green-800 flex items-center justify-center">
              <Heart size={72} fill="black" className="text-black" />
            </div>
          </div>
          <div className="pb-2">
            <p className="text-xs font-bold text-text-sub uppercase tracking-widest mb-2">Playlist</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-3">Liked Songs</h1>
            <p className="text-text-sub">{likedSongs.length} songs</p>
          </div>
        </div>

        {likedSongs.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {likedSongs.map((track, i) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <SongCard track={track} context={likedSongs} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-surface-light rounded-full flex items-center justify-center mb-6 text-text-sub">
              <Heart size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">No liked songs yet</h3>
            <p className="text-text-sub">Tap the heart on any song to save it here.</p>
          </div>
        )}
      </motion.div>
    );
  }

  if (path === '/recent') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-10 px-6">
        <div className="flex items-center gap-5 mb-10">
          <div className="p-4 bg-surface-light rounded-lg">
            <Clock size={36} className="text-brand" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Recently Played</h1>
        </div>

        {recentlyPlayed.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {recentlyPlayed.map((track, i) => (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <SongCard track={track} context={recentlyPlayed} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-surface-light rounded-full flex items-center justify-center mb-6 text-text-sub">
              <Clock size={40} />
            </div>
            <h3 className="text-xl font-bold mb-2">History is empty</h3>
            <p className="text-text-sub">Your recently played tracks will show up here.</p>
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
      <div className="w-28 h-28 bg-surface-light rounded-full flex items-center justify-center mb-8">
        <LibraryIcon size={52} className="text-brand" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Your Library</h1>
      <p className="text-text-sub max-w-md text-lg mb-12">
        Keep track of your favorite artists, albums, and playlists here.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
        <button
          onClick={() => navigate('/favorites')}
          className="p-6 bg-surface-light rounded-lg text-left hover:bg-surface-light/70 transition-colors group"
        >
          <Heart className="text-brand mb-4 group-hover:scale-110 transition-transform" size={28} />
          <h3 className="font-bold text-lg mb-1">Liked Songs</h3>
          <p className="text-text-sub text-sm">{likedSongs.length} tracks</p>
        </button>
        <button
          onClick={() => navigate('/recent')}
          className="p-6 bg-surface-light rounded-lg text-left hover:bg-surface-light/70 transition-colors group"
        >
          <Clock className="text-brand mb-4 group-hover:scale-110 transition-transform" size={28} />
          <h3 className="font-bold text-lg mb-1">Recently Played</h3>
          <p className="text-text-sub text-sm">{recentlyPlayed.length} tracks</p>
        </button>
      </div>
    </motion.div>
  );
};

export default Library;