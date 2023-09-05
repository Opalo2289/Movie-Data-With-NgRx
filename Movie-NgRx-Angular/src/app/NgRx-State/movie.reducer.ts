import { createReducer, on } from "@ngrx/store";
import { Movies } from "../interface/baseData-movie";
import { MoviesApiActions } from "./movie.actions";
import { ApiResponse } from "../interface/apiResponse-movie";
import { Observable } from "rxjs";


export const initialState: ApiResponse<Movies>[] = []

export const moviesReducer = createReducer(
    initialState,
    on(MoviesApiActions.retrievedMovieList, (_state, {movies}) => movies)
);