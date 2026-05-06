import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const collections = [
  {
    title: "Midnight Drive",
    genre: "Synthwave • Electronic",
    image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Deep Focus",
    genre: "Ambient • Lo-Fi",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Urban Nights",
    genre: "R&B • Soul",
    image: "https://images.unsplash.com/photo-1493225457124-a1a2a5f5c924?auto=format&fit=crop&q=80&w=500"
  },
  {
    title: "Ethereal Voices",
    genre: "Indie • Alternative",
    image: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=500"
  }
];

export function Discovery() {
  return (
    <section id="explore" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Curated <span className="text-gradient">Collections</span></h2>
            <p className="text-text-secondary text-lg max-w-lg">Hand-picked selections updated daily based on global trends and your personal acoustic profile.</p>
          </div>
          <button className="text-primary font-medium hover:text-white transition-colors">View All Collections</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img src={collection.image} alt={collection.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary/90 text-white flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
              </div>

              {/* Text Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white font-heading mb-1">{collection.title}</h3>
                <p className="text-text-muted text-sm">{collection.genre}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
