import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Movies } from '../interface/baseData-movie';
import { ApiResponse } from '../interface/apiResponse-movie';
import { Observable } from 'rxjs';


export const selectMovies = createFeatureSelector<ApiResponse<Movies>>('movies');


export const selectMoviesCollection = createSelector(
    selectMovies,
    (movies) => {
      // Ahora, puedes acceder a la propiedad 'results' de 'ApiResponse' dentro de 'movies'.
      return movies.flatMap((apiResponse) => apiResponse.results);
    }
  );