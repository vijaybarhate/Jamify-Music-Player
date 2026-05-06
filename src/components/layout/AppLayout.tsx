import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import BottomPlayer from '../player/BottomPlayer';
import HiddenYouTube from '../player/HiddenYouTube';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';

const AppLayout: React.FC = () => {
  useKeyboardShortcuts();
  
  return (
    <div className="flex min-h-screen bg-[#050816] text-white selection:bg-[#38BDF8]/30 overflow-x-hidden">
      {/* Persistent Hidden Player */}
      <HiddenYouTube />
      
      {/* Sidebar - Desktop Only */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 pb-32 md:pb-28">
        <div className="flex-1">
          <Outlet />
        </div>
      </main>

      {/* Bottom Audio Player - Always Visible */}
      <BottomPlayer />

      {/* Bottom Navigation - Mobile Only */}
      <BottomNav />
    </div>
  );
};

export default AppLayout;
