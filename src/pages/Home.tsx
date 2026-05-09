import React, { useEffect, useState } from 'react';
import { getTrendingTracks, searchTracks } from '../services/youtube';
import { Track } from '../types';
import SongCard from '../components/cards/SongCard';
import { SkeletonGrid } from '../components/common/LoadingSpinner';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Music, Play } from 'lucide-react';

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

  const Section: React.FC<{ title: string; icon: React.ReactNode; tracks: Track[] }> = ({ title, icon, tracks }) => (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6 px-6">
        <div className="text-text-sub">{icon}</div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 md:px-6">
        {tracks.map((track, i) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <SongCard track={track} context={tracks} />
          </motion.div>
        ))}
      </div>
    </section>
  );

  if (loading) {
    return (
      <div className="py-12 px-6">
        <div className="mb-12 px-6">
          <div className="h-14 bg-surface-light w-80 rounded-lg mb-4" />
          <div className="h-6 bg-surface-light w-48 rounded-lg" />
        </div>
        <SkeletonGrid count={8} />
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-8">
      {/* Hero */}
      <div className="px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Good Evening</h1>
        <p className="text-text-sub text-lg">Ready for some music?</p>
      </div>

      {/* Banner */}
      <div className="my-12 px-6">
        <div className="relative overflow-hidden rounded-2xl p-8 md:p-12" style={{
          background: 'linear-gradient(135deg, rgba(29,185,84,0.2) 0%, rgba(40,40,40,0.8) 100%)'
        }}>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Discover Your Sound</h2>
            <p className="text-text-sub text-lg mb-8 max-w-lg">
              Experience music like never before with our curated mixes.
            </p>
            <button className="btn-primary inline-flex items-center gap-2">
              <Play size={18} fill="currentColor" />
              Play
            </button>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-3xl" />
        </div>
      </div>

      <Section title="Trending Now" icon={<TrendingUp size={20} />} tracks={trending} />
      <Section title="Made For You" icon={<Sparkles size={20} />} tracks={recommended} />
      <Section title="Lofi & Chill" icon={<Music size={20} />} tracks={lofi} />
    </motion.div>
  );
};

export default Home;