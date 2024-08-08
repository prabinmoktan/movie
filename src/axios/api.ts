const apiKey = import.meta.env.VITE_API_KEY;

export const TRENDING_MOVIES_API = `/trending/movie/day?api_key=${apiKey}`;