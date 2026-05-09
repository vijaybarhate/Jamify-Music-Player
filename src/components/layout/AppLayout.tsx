import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import BottomPlayer from '../player/BottomPlayer';
import HiddenYouTube from '../player/HiddenYouTube';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';

const AppLayout: React.FC = () => {
  useKeyboardShortcuts();
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-bg text-text overflow-hidden">
      <HiddenYouTube />
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 pb-40 md:pb-28">
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      <BottomPlayer />
      <BottomNav />
    </div>
  );
};

export default AppLayout;