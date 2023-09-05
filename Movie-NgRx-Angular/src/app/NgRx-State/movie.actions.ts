import { createActionGroup, props } from "@ngrx/store";
import { ApiResponse } from "../interface/apiResponse-movie";
import { Movies } from "../interface/baseData-movie";
import { Observable } from "rxjs";


export const MoviesApiActions = createActionGroup({
    source: 'Movies API',
    events: {
      'Retrieved Movie List': props<{ movies: ApiResponse<Movies> }>(),
    },
  });