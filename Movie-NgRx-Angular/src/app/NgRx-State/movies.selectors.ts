import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Movies } from '../interface/baseData-movie';
import { ApiResponse } from '../interface/apiResponse-movie';



export const selectMovies = createFeatureSelector<ApiResponse<Movies>>('movies');


export const selectMoviesCollection = createSelector(
    selectMovies,
    (movies) => {
      return movies.results
    }
  );