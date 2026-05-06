import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Search, 
  Library, 
  Heart, 
  Clock, 
  ListMusic, 
  Info,
  Music2
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Library, label: 'Library', path: '/library' },
  ];

  const libraryItems = [
    { icon: Heart, label: 'Favorites', path: '/favorites' },
    { icon: Clock, label: 'Recent', path: '/recent' },
    { icon: ListMusic, label: 'Playlists', path: '/playlists' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-[#050816]/80 backdrop-blur-xl border-r border-white/5 h-screen sticky top-0">
      <div className="p-6">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#38BDF8] to-[#8B5CF6] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            <Music2 className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            SONIVIO
          </span>
        </NavLink>
      </div>

      <nav className="flex-1 px-4 space-y-8 overflow-y-auto custom-scrollbar pb-24">
        <div>
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Menu
          </p>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group
                    ${isActive 
                      ? 'bg-white/10 text-[#38BDF8] shadow-lg shadow-black/20' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                  `}
                >
                  <item.icon size={22} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Your Library
          </p>
          <ul className="space-y-1">
            {libraryItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group
                    ${isActive 
                      ? 'bg-white/10 text-[#38BDF8]' 
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                  `}
                >
                  <item.icon size={22} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="p-4">
        <NavLink
          to="/about"
          className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white transition-colors"
        >
          <Info size={22} />
          <span className="font-medium">About</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
