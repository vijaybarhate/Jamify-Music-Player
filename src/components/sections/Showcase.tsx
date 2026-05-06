import { motion } from 'framer-motion';
import { Play, SkipBack, SkipForward, Shuffle, Repeat } from 'lucide-react';

export function Showcase() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">The <span className="text-gradient">Interface</span></h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">A cinematic control center. Dark, minimal, and entirely focused on the artwork and the audio.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Player Mockup */}
          <div className="liquid-glass-strong rounded-3xl border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col md:flex-row h-full">
              {/* Sidebar/List Area */}
              <div className="w-full md:w-1/3 bg-black/40 border-r border-white/5 p-6 flex flex-col gap-6">
                <div className="text-sm font-semibold tracking-wider text-text-muted uppercase">Up Next</div>
                <div className="flex flex-col gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 rounded-md bg-surface overflow-hidden relative">
                        <img src={`https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=150&h=150&auto=format&fit=crop&crop=entropy`} alt="Track" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4 text-white" fill="currentColor" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">Midnight City</div>
                        <div className="text-xs text-text-muted">Synthwave Mix</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Player Area */}
              <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                {/* Blurry background derived from album art */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a1a2a5f5c924?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 blur-3xl scale-110 pointer-events-none" />
                
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center mb-10">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl mb-8 border border-white/10"
                  >
                    <img src="https://images.unsplash.com/photo-1493225457124-a1a2a5f5c924?auto=format&fit=crop&q=80&w=800" alt="Now Playing" className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-white">Neon Horizons</h3>
                    <p className="text-primary font-medium text-lg">Electronic Dreams</p>
                  </div>
                </div>

                {/* Controls Area */}
                <div className="relative z-10 w-full max-w-md mx-auto">
                  {/* Progress Bar */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs text-text-muted">1:24</span>
                    <div className="h-1.5 flex-1 bg-surface-light rounded-full overflow-hidden relative cursor-pointer group">
                      <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-white rounded-full -translate-y-1/2 -translate-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                    </div>
                    <span className="text-xs text-text-muted">4:05</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-between px-4">
                    <button className="text-text-muted hover:text-white transition-colors"><Shuffle className="w-5 h-5" /></button>
                    <div className="flex items-center gap-6">
                      <button className="text-text-secondary hover:text-white transition-colors"><SkipBack className="w-6 h-6" fill="currentColor" /></button>
                      <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </button>
                      <button className="text-text-secondary hover:text-white transition-colors"><SkipForward className="w-6 h-6" fill="currentColor" /></button>
                    </div>
                    <button className="text-text-muted hover:text-white transition-colors"><Repeat className="w-5 h-5" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
