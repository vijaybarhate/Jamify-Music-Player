import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Explore', href: '#explore' },
  { name: 'Collections', href: '#collections' },
  { name: 'About', href: '#about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-4 liquid-glass-strong' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.5)] group-hover:scale-105 transition-transform duration-300">
            <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
          </div>
          <span className="font-heading font-bold text-xl tracking-wide text-text-primary">SONIVIO</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium text-text-secondary">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-text-primary transition-colors duration-200">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Start Listening
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-secondary hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 liquid-glass-strong border-t border-white/5 py-4 px-6 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-text-secondary hover:text-white font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button className="w-full mt-2 py-3 rounded-xl bg-primary/20 text-primary font-medium border border-primary/30">
                  Start Listening
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
