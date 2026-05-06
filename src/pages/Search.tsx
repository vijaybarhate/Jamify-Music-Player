import React, { useState, useEffect } from 'react';
import { Search as SearchIcon, X, SlidersHorizontal } from 'lucide-react';
import { searchTracks } from '../services/youtube';
import { Track } from '../types';
import SongCard from '../components/cards/SongCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { useDebounce } from '../hooks/useDebounce';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="py-8 md:py-12">
      {/* Sticky Search Header */}
      <div className="sticky top-0 z-30 px-6 pb-8 bg-[#050816]/80 backdrop-blur-xl">
        <h1 className="text-4xl font-black mb-8">Search</h1>
        
        <div className="relative group max-w-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/20 to-[#8B5CF6]/20 rounded-2xl blur-xl group-focus-within:opacity-100 opacity-0 transition-opacity" />
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl p-1 focus-within:bg-white/10 transition-all focus-within:border-white/20">
            <div className="px-4 text-gray-400">
              <SearchIcon size={22} />
            </div>
            <input 
              type="text" 
              placeholder="What do you want to listen to?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-gray-500 py-3 font-medium"
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            )}
            <div className="h-8 w-[1px] bg-white/10 mx-2" />
            <button className="p-3 text-gray-400 hover:text-white transition-colors">
              <SlidersHorizontal size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingSpinner />
            </motion.div>
          ) : results.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
            >
              {results.map((track) => (
                <SongCard key={track.id} track={track} context={results} />
              ))}
            </motion.div>
          ) : query && !loading ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 text-gray-500">
                <SearchIcon size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">No results found for "{query}"</h3>
              <p className="text-gray-500">Try searching for something else or check your spelling.</p>
            </motion.div>
          ) : (
            <motion.div
              key="initial"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-xl font-bold mb-6">Browse All</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  { label: 'Pop', color: 'bg-pink-500' },
                  { label: 'Hip-Hop', color: 'bg-orange-500' },
                  { label: 'Rock', color: 'bg-red-500' },
                  { label: 'Electronic', color: 'bg-purple-500' },
                  { label: 'Jazz', color: 'bg-blue-500' },
                  { label: 'Classical', color: 'bg-green-500' },
                  { label: 'R&B', color: 'bg-yellow-500' },
                  { label: 'Chill', color: 'bg-cyan-500' },
                ].map((genre) => (
                  <button 
                    key={genre.label}
                    onClick={() => setQuery(genre.label)}
                    className={`aspect-[16/9] rounded-2xl ${genre.color} p-4 text-left font-black text-xl hover:scale-105 transition-transform overflow-hidden relative group`}
                  >
                    <span className="relative z-10">{genre.label}</span>
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/2 group-hover:translate-x-0 transition-transform" />
                  </button>
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
