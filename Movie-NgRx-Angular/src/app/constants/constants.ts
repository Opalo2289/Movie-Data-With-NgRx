const API_KEY = '859b9a5b3fb8156847720994bdacd732';
export const BASE_API_URL = "https://api.themoviedb.org/3/";
export const DISCOVER_MOVIE_URL = `${BASE_API_URL}/discover/movie?language=es-COL?&api_key=${API_KEY}`;
export const SEARCH_MOVIE_URL = `${BASE_API_URL}/search/movie?&api_key=${API_KEY}`;
export const MOVIE_URL = `${BASE_API_URL}/movie/:movie_id?language=es-COL?&api_key=${API_KEY}`


//api.themoviedb.org/3/movie/popular?api_key=###&page=1
