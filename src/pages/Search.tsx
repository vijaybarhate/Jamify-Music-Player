import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { searchTracks } from '../services/youtube';
import { Track } from '../types';
import SongCard from '../components/cards/SongCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useDebounce } from '../hooks/useDebounce';
import { motion, AnimatePresence } from 'framer-motion';

const genres = [
  { label: 'Pop', color: 'from-pink-500' },
  { label: 'Hip-Hop', color: 'from-purple-500' },
  { label: 'Rock', color: 'from-red-500' },
  { label: 'Electronic', color: 'from-green-500' },
  { label: 'Jazz', color: 'from-blue-500' },
  { label: 'Classical', color: 'from-yellow-500' },
  { label: 'R&B', color: 'from-orange-500' },
  { label: 'Chill', color: 'from-cyan-500' },
];

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const performSearch = async () => {
      if (!debouncedQuery.trim()) {
        setResults([]);
        return;
      }
      setLoading(true);
      try {
        const tracks = await searchTracks(debouncedQuery);
        setResults(tracks);
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    };
    performSearch();
  }, [debouncedQuery]);

  return (
    <div className="py-8">
      {/* Search Header */}
      <div className="sticky top-0 z-30 px-6 pb-8 bg-bg/80 backdrop-blur-xl">
        <h1 className="text-3xl font-bold mb-6">Search</h1>

        <div className="relative max-w-3xl">
          <div className="flex items-center bg-surface-light rounded-full px-4">
            <SearchIcon size={20} className="text-text-sub" />
            <input
              type="text"
              placeholder="What do you want to listen to?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent border-none focus:outline-none text-text py-3.5 px-3"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-text-sub hover:text-text transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <LoadingSpinner />
            </motion.div>
          ) : results.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            >
              {results.map((track, i) => (
                <motion.div
                  key={track.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <SongCard track={track} context={results} />
                </motion.div>
              ))}
            </motion.div>
          ) : query && !loading ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-surface-light rounded-full flex items-center justify-center mb-6 text-text-sub">
                <SearchIcon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">No results for "{query}"</h3>
              <p className="text-text-sub">Try a different search term.</p>
            </motion.div>
          ) : (
            <motion.div key="browse" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-xl font-bold mb-6">Browse All</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {genres.map((genre, i) => (
                  <motion.button
                    key={genre.label}
                    onClick={() => setQuery(genre.label)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`aspect-[4/3] rounded-lg bg-gradient-to-br ${genre.color} to-gray-900 p-4 text-left font-bold text-lg hover:opacity-90 transition-opacity`}
                  >
                    {genre.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Search;