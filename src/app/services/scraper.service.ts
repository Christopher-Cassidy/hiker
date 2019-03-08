import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ScraperService {

  private readonly apiUrl = 'api/scraper';  // URL to web api

  constructor(private http: HttpClient) { }
    
  /** GET url content from the server */
  getContent (url: string): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + `\content?url=${url}`)
      .pipe(
        tap(_ => this.log('fetched url content')),
        catchError(this.handleError('getContent', []))
      );
  }

  /** GET url content images wrom the server */
  getImages (url: string): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl + `\images?url=${url}`)
      .pipe(
        tap(_ => this.log('fetched images')),
        catchError(this.handleError('getImages', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
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
    console.log(message);
  }
}
