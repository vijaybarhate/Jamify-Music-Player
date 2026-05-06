import { Play, Twitter, Github, Disc } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black py-12 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
              </div>
              <span className="font-heading font-bold text-xl tracking-wide text-text-primary">SONIVIO</span>
            </a>
            <p className="text-text-muted max-w-sm">
              Building the future of audio interfaces for those who demand the best in quality and design.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Platform</h4>
            <ul className="flex flex-col gap-4 text-text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Download App</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web Player</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Creators</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Brand Assets</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} Sonivio Inc. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-text-muted hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-muted hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-text-muted hover:text-white transition-colors">
              <Disc className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
