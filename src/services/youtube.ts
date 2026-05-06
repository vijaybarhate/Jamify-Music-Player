import axios from 'axios';
import { Track } from '../types';
import { cacheService } from './cache';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const searchTracks = async (query: string, maxResults = 20): Promise<Track[]> => {
  const cacheKey = `search_${query}_${maxResults}`;
  const cached = cacheService.get<Track[]>(cacheKey);
  if (cached) return cached;

  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        maxResults,
        q: query,
        type: 'video',
        videoCategoryId: '10', // Music category
        key: API_KEY,
      },
    });

    const tracks: Track[] = response.data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      artist: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
      publishedAt: item.snippet.publishedAt,
    }));

    cacheService.set(cacheKey, tracks);
    return tracks;
  } catch (error) {
    console.error('Error fetching from YouTube API:', error);
    throw error;
  }
};

export const getTrendingTracks = async (): Promise<Track[]> => {
  const cacheKey = 'trending_tracks';
  const cached = cacheService.get<Track[]>(cacheKey);
  if (cached) return cached;

  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'US',
        videoCategoryId: '10',
        maxResults: 20,
        key: API_KEY,
      },
    });

    const tracks: Track[] = response.data.items.map((item: any) => ({
      id: item.id,
      title: item.snippet.title,
      artist: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
      publishedAt: item.snippet.publishedAt,
    }));

    cacheService.set(cacheKey, tracks);
    return tracks;
  } catch (error) {
    console.error('Error fetching trending tracks:', error);
    return searchTracks('trending music 2026'); // Fallback to search
  }
};
