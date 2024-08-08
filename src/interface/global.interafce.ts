import { Settings } from "react-slick";

export interface LoginInterface {
  email: string;
  password: string;
}
export interface titleTypes{
  title:string | undefined;
  variant?: 'h6' | 'h4';
}

export interface registerInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface movieCardInterface {
  media_type?: string;
  name?: string;
  adult?: boolean;
  id?: number;
  title?: string;
  tagline?: string;
  poster_path?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  release_date?: number;
  original_language?: string;
  backdrop_path?: string;
}
export interface movieDetailInterface {
  adult?: boolean;
  backdrop_path?: string;
  
  budget?:number;
  genres?: [
    {
      id: number;
      name: string;
    },
    
  ];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    },
   
  ];
  production_countries?: [
    {
      iso_3166_1: string
      name: string;
    }
  ];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
export interface movie {
  movie: movieCardInterface;
}
export interface popularMovieInterface {
  adult?: boolean;
  gender: number;
  id?: number;

  known_for_department?: string;
  name?: string;
  popularity?: number;
  profile_path?: string;
}
export interface tvshowsInterface {
  backdrop_path?: string;
  first_air_date?: number;
  genre_ids?: number;
  id?: number;
  name?: string;
  origin_country?: string;
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface carouselTypes {
  slides: tvshowsInterface[];
  settings?: Settings;
}
export interface cardTypes {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  image: string;
  details?: string;
  className?:any;
}

export interface TrendingResponse {
  results: movieCardInterface[];
}
 export interface tvShowsResponse {
  results: tvshowsInterface[];
 } 
 interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
}

interface Genre {
  id: number;
  name: string;
}

interface LastEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: string | null;
  season_number: number;
  show_id: number;
  still_path: string | null;
}

interface NextEpisodeToAir {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  production_code: string | null;
  season_number: number;
  show_id: number;
  still_path: string | null;
}

interface Network {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface TvShowDetailsResponse {
  adult: boolean;
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: LastEpisodeToAir;
  name: string;
  networks: Network[];
  next_episode_to_air: NextEpisodeToAir;
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export type cardItemTypes = movieCardInterface | tvshowsInterface;

export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface ShowVideo {
  id: number;
  results: Video[];
}

export interface appAutoComplete {
 options: string[];
  label: string;
  id?: string;
  defaultValue?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
  width?: number;
 
}

