import { fetchJSON } from "./requestUtils";

export interface VideoResult {
  date: string;
  videos: Array<string>;
}

export type VideoResults = Array<VideoResult>;

export const fetchVideos = (): Promise<VideoResults> => fetchJSON('/api/videos');
