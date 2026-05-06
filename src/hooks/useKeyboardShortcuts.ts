import { useEffect } from 'react';
import { usePlayerStore } from '../store/playerStore';

export const useKeyboardShortcuts = () => {
  const { 
    play, 
    pause, 
    isPlaying, 
    next, 
    previous, 
    toggleMute, 
    currentTrack, 
    toggleLike,
    isExpanded,
    setExpanded
  } = usePlayerStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if user is typing in an input
      if (
        e.target instanceof HTMLInputElement || 
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          isPlaying ? pause() : play();
          break;
        case 'ArrowRight':
          if (e.shiftKey) next();
          break;
        case 'ArrowLeft':
          if (e.shiftKey) previous();
          break;
        case 'KeyM':
          toggleMute();
          break;
        case 'KeyL':
          if (currentTrack) toggleLike(currentTrack);
          break;
        case 'KeyF':
          setExpanded(!isExpanded);
          break;
        case 'Escape':
          if (isExpanded) setExpanded(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, play, pause, next, previous, toggleMute, currentTrack, toggleLike, isExpanded, setExpanded]);
};
