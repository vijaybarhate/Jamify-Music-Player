import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, Heart } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Library, label: 'Library', path: '/library' },
    { icon: Heart, label: 'Liked', path: '/favorites' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#050816]/90 backdrop-blur-2xl border-t border-white/5 px-6 py-3 z-50">
      <ul className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => `
                flex flex-col items-center gap-1 transition-colors duration-300
                ${isActive ? 'text-[#38BDF8]' : 'text-gray-500'}
              `}
            >
              <item.icon size={24} />
              <span className="text-[10px] font-medium uppercase tracking-wider">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
