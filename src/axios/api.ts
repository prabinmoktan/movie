const apiKey = import.meta.env.VITE_API_KEY;

export const TRENDING_MOVIES_API = `/trending/movie/day?language=en-US&sort_by=release_date&sort_order=desc&api_key=${apiKey}`;