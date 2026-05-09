import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Search, Library, Info } from 'lucide-react';

const BottomNav: React.FC = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Search', path: '/search' },
    { icon: Library, label: 'Library', path: '/library' },
    { icon: Info, label: 'About', path: '/about' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-bg/95 backdrop-blur-md border-t border-white/10 px-4 py-2 z-50">
      <ul className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => `
                flex flex-col items-center gap-1 p-2 rounded-lg transition-colors
                ${isActive ? 'text-brand' : 'text-text-sub hover:text-text'}
              `}
            >
              <item.icon size={22} />
              <span className="text-[10px] font-semibold">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;