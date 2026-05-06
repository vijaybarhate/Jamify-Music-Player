import { motion } from 'framer-motion';
import { Activity, Zap, Globe, Shield } from 'lucide-react';

const stats = [
  { icon: Activity, value: "Zero", label: "Audio Compression" },
  { icon: Zap, value: "12ms", label: "Average Latency" },
  { icon: Globe, value: "50M+", label: "Tracks Available" },
  { icon: Shield, value: "100%", label: "Creator Payout" },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden border-y border-white/5 bg-surface-light/30">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/5 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl md:text-5xl font-bold font-heading text-white mb-2 tracking-tight">{stat.value}</div>
              <div className="text-text-secondary font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
