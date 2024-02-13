import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class ImdbService {
  private apiUrl = 'https://online-movie-database.p.rapidapi.com/auto-complete';

  constructor(private http: HttpClient) {}

  getMovieDetails(query: string): Observable<any> {
    const headers = {
      'x-rapidapi-key': 'df01998272msh7895591f684b20dp18b7ffjsn0df3c0451415',
      'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
    };

    const searchUrl = `${this.apiUrl}?q=` + encodeURIComponent(query);

    return this.http.get<{ d: Movie[] }>(searchUrl, {
      headers,
    });
  }
}
