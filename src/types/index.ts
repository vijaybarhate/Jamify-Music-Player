export interface Track {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  duration?: string;
  publishedAt?: string;
}

export type RepeatMode = 'none' | 'all' | 'one';

export interface PlayerState {
  currentTrack: Track | null;
  queue: Track[];
  queueIndex: number;
  isPlaying: boolean;
  isMuted: boolean;
  volume: number;
  progress: number;
  duration: number;
  shuffle: boolean;
  repeatMode: RepeatMode;
  likedSongs: Track[];
  recentlyPlayed: Track[];
  isExpanded: boolean;
  lastSeekTime: number | null;
  
  // Actions
  play: (track?: Track, newQueue?: Track[]) => void;
  pause: () => void;
  resume: () => void;
  next: () => void;
  previous: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  toggleShuffle: () => void;
  setRepeatMode: (mode: RepeatMode) => void;
  addToQueue: (track: Track) => void;
  setQueue: (tracks: Track[]) => void;
  removeFromQueue: (trackId: string) => void;
  clearQueue: () => void;
  setProgress: (progress: number) => void;
  setDuration: (duration: number) => void;
  toggleLike: (track: Track) => void;
  setExpanded: (expanded: boolean) => void;
}
