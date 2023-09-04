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
    adult: boolean
    movie?: any;
    id?: number;
    title?: string;
    tagline?: string;
    poster_path?: string;
    original_title?: string;
    overview: string;
    popularity: number;
    release_date?: number;
    original_language?: number;
    backdrop_path?: string;

}
export interface popularMovieInterface {
    adult:  boolean;
    gender: number;
    id : number;

    known_for_department : string;
    name: string;
    popularity: number;
    profile_path : any;
}