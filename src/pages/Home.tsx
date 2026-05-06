import React, { useEffect, useState } from 'react';
import { getTrendingTracks, searchTracks } from '../services/youtube';
import { Track } from '../types';
import SongCard from '../components/cards/SongCard';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Music } from 'lucide-react';

const Home: React.FC = () => {
  const [trending, setTrending] = useState<Track[]>([]);
  const [recommended, setRecommended] = useState<Track[]>([]);
  const [lofi, setLofi] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const [trendingData, recommendedData, lofiData] = await Promise.all([
          getTrendingTracks(),
          searchTracks('featured music 2026 mixes'),
          searchTracks('lofi hip hop radio beats to relax'),
        ]);
        setTrending(trendingData);
        setRecommended(recommendedData);
        setLofi(lofiData);
      } catch (error) {
        console.error('Failed to fetch home data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) return <LoadingSpinner />;

  const Section: React.FC<{ title: string; icon: React.ReactNode; tracks: Track[] }> = ({ title, icon, tracks }) => (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6 px-6">
        <div className="p-2 bg-white/5 rounded-lg text-[#38BDF8]">
          {icon}
        </div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-6 px-4 md:px-6">
        {tracks.map((track) => (
          <SongCard key={track.id} track={track} context={tracks} />
        ))}
      </div>
    </section>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-8 md:py-12"
    >
      {/* Welcome Header */}
      <div className="px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40">
          Good Evening
        </h1>
        <p className="text-gray-500 font-medium">
          Ready for some futuristic vibes?
        </p>
      </div>

      <Section title="Trending Now" icon={<TrendingUp size={20} />} tracks={trending} />
      
      <div className="my-16 px-6">
        <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#38BDF8]/10 via-[#8B5CF6]/10 to-transparent border border-white/5">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Sound</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Experience music like never before with SONIVIO's AI-curated mixes and futuristic interface.
            </p>
            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              Start Listening
            </button>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#38BDF8]/20 to-transparent blur-3xl -z-0" />
        </div>
      </div>

      <Section title="Recommended for You" icon={<Sparkles size={20} />} tracks={recommended} />
      
      <Section title="Lofi & Chill" icon={<Music size={20} />} tracks={lofi} />
    </motion.div>
  );
};

export default Home;
