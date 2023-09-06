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
    adult?: boolean;
    movie?: any;
    id?: number;
    title?: string;
    tagline?: string;
    poster_path?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    release_date?: number;
    original_language?: number;
    backdrop_path?: string;
}
export interface popularMovieInterface {
    adult: boolean;
    gender: number;
    id: number;

    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: any;
}
export interface tvshowsInterface {
    backdrop_path: string;
    first_air_date: number
    genre_ids: number
    id: number
    name: string
    origin_country: string
    original_language: string
    original_name: string
    overview: string

    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}
