import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, Heart, Clock, Info, Music2 } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Library, label: 'Your Library', path: '/library' },
  ];

  const libraryItems = [
    { icon: Heart, label: 'Liked Songs', path: '/favorites' },
    { icon: Clock, label: 'Recently Played', path: '/recent' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-bg h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
            <Music2 className="text-black w-5 h-5" />
          </div>
          <span className="text-xl font-bold font-circular">SONIVIO</span>
        </NavLink>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-4 overflow-y-auto">
        <div>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center gap-4 px-4 py-3 rounded-lg transition-colors
                    ${isActive ? 'bg-surface-light/50 text-text' : 'text-text-sub hover:text-text hover:bg-surface-light/30'}
                  `}
                >
                  <item.icon size={22} />
                  <span className="font-semibold text-sm">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-white/10">
          <ul className="space-y-1">
            {libraryItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `
                    flex items-center gap-4 px-4 py-3 rounded-lg transition-colors
                    ${isActive ? 'bg-surface-light/50 text-text' : 'text-text-sub hover:text-text hover:bg-surface-light/30'}
                  `}
                >
                  <item.icon size={22} />
                  <span className="font-semibold text-sm">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* About */}
      <div className="p-4 border-t border-white/10">
        <NavLink
          to="/about"
          className="flex items-center gap-4 px-4 py-3 text-text-sub hover:text-text rounded-lg hover:bg-surface-light/30 transition-colors"
        >
          <Info size={22} />
          <span className="font-semibold text-sm">About</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;