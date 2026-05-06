import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-4xl aspect-[2/1] bg-gradient-to-tr from-primary/20 via-accent/20 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto liquid-glass-strong rounded-3xl p-12 md:p-20"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Experience the <span className="text-gradient">future</span> of listening.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-xl mx-auto">
            Join the next generation of audiophiles. Stop managing files and start experiencing sound the way it was meant to be heard.
          </p>
          
          <button className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-200 bg-transparent rounded-full border border-white/20 hover:border-transparent overflow-hidden">
            {/* Hover Background Gradient */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            
            <span className="relative z-10 flex items-center gap-2">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <p className="mt-6 text-sm text-text-muted">No credit card required for the first 30 days.</p>
        </motion.div>
      </div>
    </section>
  );
}
