import { motion } from 'framer-motion';
import { Play, ArrowRight, Disc3, Music4, Radio } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass border-primary/30 text-primary text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Sonivio 2.0 is Live
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            Where Sound Meets <br />
            <span className="text-gradient">Identity.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-lg">
            Experience a cinematic music ecosystem designed for audiophiles. Organize, discover, and immerse yourself in pure sound without distractions.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="group px-8 py-4 rounded-full bg-text-primary text-background font-semibold flex items-center gap-2 hover:bg-white/90 transition-all duration-300">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" />
              Explore Sonivio
            </button>
            <button className="group px-8 py-4 rounded-full liquid-glass hover:bg-surface-light font-semibold flex items-center gap-2 transition-all duration-300">
              View Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Floating UI Elements */}
          <div className="relative w-full max-w-md aspect-square rounded-full border border-white/5 flex items-center justify-center animate-[spin_60s_linear_infinite]">
            <div className="absolute w-[120%] h-[120%] border border-white/5 rounded-full border-dashed" />
            <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full" />
            
            {/* Center Album Art */}
            <div className="absolute inset-0 m-auto w-48 h-48 rounded-full overflow-hidden border-4 border-surface shadow-[0_0_40px_rgba(56,189,248,0.3)] animate-[spin_60s_linear_infinite_reverse]">
              <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=500" alt="Album Cover" className="w-full h-full object-cover" />
            </div>

            {/* Orbiting Badges */}
            <div className="absolute top-0 -translate-y-1/2 liquid-glass-strong px-4 py-2 rounded-2xl flex items-center gap-3 animate-[spin_60s_linear_infinite_reverse]">
               <Music4 className="w-4 h-4 text-primary" />
               <span className="text-sm font-medium">Lossless Audio</span>
            </div>
            
            <div className="absolute bottom-10 right-0 translate-x-1/2 liquid-glass-strong px-4 py-2 rounded-2xl flex items-center gap-3 animate-[spin_60s_linear_infinite_reverse]">
               <Disc3 className="w-4 h-4 text-accent" />
               <span className="text-sm font-medium">Smart Curation</span>
            </div>
            
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 liquid-glass-strong px-4 py-2 rounded-2xl flex items-center gap-3 animate-[spin_60s_linear_infinite_reverse]">
               <Radio className="w-4 h-4 text-secondary" />
               <span className="text-sm font-medium">Live Radio</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
