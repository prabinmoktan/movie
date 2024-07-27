import { Settings } from "react-slick";

export interface LoginInterface {
  email: string;
  password: string;
}

export interface registerInterface {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface movieCardInterface {
  // movie: {
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
  // };
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
}

export interface TrendingResponse {
  results: movieCardInterface[];
}
