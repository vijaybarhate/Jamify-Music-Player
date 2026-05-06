import React from 'react';
import { Music2, Github, Globe, Shield, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    { icon: Globe, title: 'Global Search', desc: 'Access millions of tracks via the YouTube Data API.' },
    { icon: Cpu, title: 'Futuristic UI', desc: 'Built with glassmorphism and modern design principles.' },
    { icon: Shield, title: 'Quota Optimized', desc: 'Smart caching system to reduce API usage and improve speed.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-6 py-12 md:py-20"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <div className="w-20 h-20 bg-gradient-to-br from-[#38BDF8] to-[#8B5CF6] rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20 mb-8">
          <Music2 className="text-white w-10 h-10" />
        </div>
        <h1 className="text-5xl font-black mb-4">SONIVIO</h1>
        <div className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-[#38BDF8] text-sm font-bold tracking-widest uppercase">
          Version 2.0 — Futuristic Edition
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {features.map((f, i) => (
          <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <f.icon className="text-[#38BDF8] mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">{f.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-invert max-w-none text-gray-400 leading-relaxed space-y-6">
        <p>
          SONIVIO is a premium, open-source music application designed to redefine the streaming experience. 
          It combines the vast library of YouTube with a high-end, immersive interface inspired by modern 
          operating systems and futuristic aesthetics.
        </p>
        <p>
          Built with React, TypeScript, and Tailwind CSS, SONIVIO prioritizes performance, 
          responsiveness, and visual density. Our mission is to provide a platform that feels 
          like a native desktop application, focused entirely on the music and the listener.
        </p>
      </div>

      <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">
            <Globe size={24} />
          </a>
        </div>
        <div className="text-sm text-gray-600 font-medium">
          © 2026 SONIVIO. All rights reserved.
        </div>
      </div>
    </motion.div>
  );
};

export default About;
