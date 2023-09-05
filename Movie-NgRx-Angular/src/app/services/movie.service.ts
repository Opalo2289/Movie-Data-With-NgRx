import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movies } from '../interface/baseData-movie';
import { ApiResponse } from '../interface/apiResponse-movie';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './messages.service';
import { DISCOVER_MOVIE_URL, MOVIE_URL, SEARCH_MOVIE_URL } from '../constants/constants';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private _http: HttpClient, private _messageService: MessageService) { }


  getMovies(page: number): Observable<ApiResponse<Movies>> {
    return this._http.get<ApiResponse<Movies>>(`${DISCOVER_MOVIE_URL}&page=${page}`)
      .pipe(
        tap(_ => this.log('fetched movies')),
        catchError(this.handleError<ApiResponse<Movies>>('getMovies'))
      );
  };

  getMovieById(id: number): Observable<Movies> {

    return this._http.get<Movies>(MOVIE_URL.replace(':movie_id', id.toString())).pipe(
      tap(_ => this.log(`fetched movie id=${id}`)),
      catchError(this.handleError<Movies>(`getMovieById id=${id}`))
    );

  };


/* GET heroes whose name contains search term */
searchMovies(term: string, page: number): Observable<ApiResponse<Movies>> {

  if (!term.trim()) {
  return this.getMovies(page)
    // Si no hay un término de búsqueda, retorna un arreglo vacío.
    // return of ({ page: 0, total_pages: 0, total_results: 0, results: [] }); //TODO: Definir esto de manera que pueda extraerse del  Observable<ApiResponse<Movies>> directamente
  }
  
  return this._http.get<ApiResponse<Movies>>(`${SEARCH_MOVIE_URL}&query=${term}&page=${page}`).pipe(
    tap(x => x.results.length ?
      this.log(`found movies matching "${term}"`) :
      this.log(`no movies matching "${term}"`)),
    catchError(this.handleError<ApiResponse<Movies>>('searchMovies'))
  );
}


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this._messageService.add(`HeroService: ${message}`);
  }
}
