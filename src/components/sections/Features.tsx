import { motion } from 'framer-motion';
import { Sparkles, Radio, Headphones, Search, Heart, Layers } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "Smart Discovery",
    description: "Our AI analyzes your listening habits to uncover hidden gems you'll absolutely love.",
    color: "text-primary"
  },
  {
    icon: Layers,
    title: "Playlist Intelligence",
    description: "Auto-generating collections that perfectly match the mood, time of day, and activity.",
    color: "text-accent"
  },
  {
    icon: Search,
    title: "Lightning Search",
    description: "Find any track, artist, or album instantly with our highly optimized indexing system.",
    color: "text-secondary"
  },
  {
    icon: Headphones,
    title: "Lossless Playback",
    description: "Experience studio-quality audio exactly as the creators originally intended it.",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Deep Favorites",
    description: "Build an expansive library of your loved tracks, carefully organized and accessible.",
    color: "text-accent"
  },
  {
    icon: Radio,
    title: "Seamless Radio",
    description: "Infinite listening based on any seed track with perfectly blended transitions.",
    color: "text-secondary"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Features() {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Designed for <span className="text-gradient">Immersion</span></h2>
          <p className="text-text-secondary text-lg">Every feature is crafted to keep you in the flow state, making your music organization intuitive and your discovery endless.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group liquid-glass rounded-2xl p-8 hover:bg-surface-light/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-heading text-text-primary">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
