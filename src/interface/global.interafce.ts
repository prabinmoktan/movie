export interface LoginInterface{
    email: string;
    password: string;
}

export interface registerInterface {
    name : string;
    email : string;
    password : string;
    confirmPassword : string;
}
export interface movieCardInterface {
    adult: boolean
   movie? : any;
    id? : number;
    title? : string;
    poster_path?:string;
    original_title? : string;
    overview : string;
    popularity : number;
    release_date? : number;
    original_language? : number;

}