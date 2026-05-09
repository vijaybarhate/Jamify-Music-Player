import React from 'react';
import { Music2, Github, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    { title: 'Global Search', desc: 'Access millions of tracks via the YouTube Data API.' },
    { title: 'Immersive UI', desc: 'Dark interface inspired by Spotify design principles.' },
    { title: 'Quota Optimized', desc: 'Smart caching to reduce API usage and improve speed.' },
    { title: 'Instant Playback', desc: 'Stream audio directly with zero buffering.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      {/* Logo */}
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-20 h-20 bg-brand rounded-full flex items-center justify-center mb-8 shadow-lg shadow-brand/20"
        >
          <Music2 className="text-black w-10 h-10" />
        </motion.div>
        <h1 className="text-5xl font-bold mb-4">SONIVIO</h1>
        <div className="px-4 py-1.5 bg-surface-light rounded-full text-brand text-sm font-bold uppercase tracking-widest">
          Version 2.0
        </div>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="p-6 bg-surface-light/30 rounded-lg hover:bg-surface-light/50 transition-colors"
          >
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-text-sub text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Description */}
      <div className="text-text-sub leading-relaxed space-y-4 text-lg mb-16">
        <p>
          SONIVIO is a premium, open-source music application designed to redefine the streaming
          experience. It combines the vast library of YouTube with an immersive, Spotify-inspired
          interface.
        </p>
        <p>
          Built with React, TypeScript, and Tailwind CSS, SONIVIO prioritizes performance and
          visual density. Our mission is to provide a platform that feels like a native
          application, focused entirely on the music and the listener.
        </p>
      </div>

      {/* Footer */}
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <a href="#" className="p-2 text-text-sub hover:text-text rounded-full hover:bg-white/10 transition-colors">
            <Github size={22} />
          </a>
          <a href="#" className="p-2 text-text-sub hover:text-text rounded-full hover:bg-white/10 transition-colors">
            <Globe size={22} />
          </a>
        </div>
        <div className="text-sm text-text-sub">
          © 2026 SONIVIO. All rights reserved.
        </div>
      </div>
    </motion.div>
  );
};

export default About;