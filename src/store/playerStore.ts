import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PlayerState, RepeatMode } from '../types';

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set, get) => ({
      currentTrack: null,
      queue: [],
      queueIndex: -1,
      isPlaying: false,
      isMuted: false,
      volume: 70,
      progress: 0,
      duration: 0,
      shuffle: false,
      repeatMode: 'none',
      likedSongs: [],
      recentlyPlayed: [],
      isExpanded: false,
      lastSeekTime: null,

      play: (track, newQueue) => {
        if (track) {
          const { recentlyPlayed } = get();
          
          // Update recently played
          const filteredRecent = recentlyPlayed.filter(t => t.id !== track.id);
          const newRecent = [track, ...filteredRecent].slice(0, 50);

          if (newQueue) {
            const index = newQueue.findIndex((t) => t.id === track.id);
            set({ 
              queue: newQueue, 
              currentTrack: track, 
              queueIndex: index !== -1 ? index : 0, 
              isPlaying: true,
              recentlyPlayed: newRecent
            });
          } else {
            const { queue } = get();
            const index = queue.findIndex((t) => t.id === track.id);
            
            if (index !== -1) {
              set({ currentTrack: track, queueIndex: index, isPlaying: true, recentlyPlayed: newRecent });
            } else {
              const updatedQueue = [...queue, track];
              set({ 
                queue: updatedQueue, 
                currentTrack: track, 
                queueIndex: updatedQueue.length - 1, 
                isPlaying: true,
                recentlyPlayed: newRecent
              });
            }
          }
        } else {
          set({ isPlaying: true });
        }
      },

      pause: () => set({ isPlaying: false }),
      
      resume: () => {
        if (get().currentTrack) {
          set({ isPlaying: true });
        }
      },

      next: () => {
        const { queue, queueIndex, repeatMode, shuffle, recentlyPlayed } = get();
        if (queue.length === 0) return;

        let nextIndex = queueIndex + 1;

        if (shuffle) {
          nextIndex = Math.floor(Math.random() * queue.length);
        }

        if (nextIndex >= queue.length) {
          if (repeatMode === 'all') {
            nextIndex = 0;
          } else {
            set({ isPlaying: false });
            return;
          }
        }

        const nextTrack = queue[nextIndex];
        const filteredRecent = recentlyPlayed.filter(t => t.id !== nextTrack.id);
        const newRecent = [nextTrack, ...filteredRecent].slice(0, 50);

        set({ 
          queueIndex: nextIndex, 
          currentTrack: nextTrack,
          isPlaying: true,
          progress: 0,
          recentlyPlayed: newRecent
        });
      },

      previous: () => {
        const { queue, queueIndex, progress } = get();
        if (queue.length === 0) return;

        // If song is more than 3 seconds in, restart it
        if (progress > 3) {
          set({ progress: 0, lastSeekTime: 0 });
          return;
        }

        let prevIndex = queueIndex - 1;
        if (prevIndex < 0) {
          prevIndex = queue.length - 1;
        }

        set({ 
          queueIndex: prevIndex, 
          currentTrack: queue[prevIndex],
          isPlaying: true,
          progress: 0
        });
      },

      seek: (time) => set({ progress: time, lastSeekTime: time }),
      
      setVolume: (volume) => set({ volume, isMuted: volume === 0 }),
      
      toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
      
      toggleShuffle: () => set((state) => ({ shuffle: !state.shuffle })),
      
      setRepeatMode: (mode: RepeatMode) => set({ repeatMode: mode }),

      addToQueue: (track) => set((state) => ({ queue: [...state.queue, track] })),

      setQueue: (tracks) => set({ queue: tracks, queueIndex: 0, currentTrack: tracks[0] }),

      removeFromQueue: (trackId) => set((state) => ({
        queue: state.queue.filter((t) => t.id !== trackId)
      })),

      clearQueue: () => set({ queue: [], queueIndex: -1, currentTrack: null, isPlaying: false }),

      setProgress: (progress) => set({ progress }),
      
      setDuration: (duration) => set({ duration }),

      toggleLike: (track) => set((state) => {
        const isLiked = state.likedSongs.some((t) => t.id === track.id);
        if (isLiked) {
          return { likedSongs: state.likedSongs.filter((t) => t.id !== track.id) };
        }
        return { likedSongs: [track, ...state.likedSongs] };
      }),

      setExpanded: (expanded) => set({ isExpanded: expanded }),
    }),
    {
      name: 'sonivio-player-storage',
      partialize: (state) => ({
        volume: state.volume,
        repeatMode: state.repeatMode,
        shuffle: state.shuffle,
        likedSongs: state.likedSongs,
        recentlyPlayed: state.recentlyPlayed,
      }),
    }
  )
);
