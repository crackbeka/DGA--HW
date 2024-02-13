import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImdbService {
  private apiUrl =
    'https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr';

  constructor(private http: HttpClient) {}

  getMovieDetails(): Observable<any> {
    const headers = {
      'x-rapidapi-key': 'df01998272msh7895591f684b20dp18b7ffjsn0df3c0451415',
      'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
    };

    return this.http.get(`${this.apiUrl}`, {
      headers,
    });
  }
}
