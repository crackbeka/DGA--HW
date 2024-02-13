import { Component, OnInit } from '@angular/core';
import { ImdbService } from './imdb.service';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
})
export class ImdbComponent implements OnInit {
  query = '';
  movies$: Observable<any> | undefined;
  private searchTerms = new Subject<string>();

  constructor(private imdbService: ImdbService) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: string) => this.imdbService.getMovieDetails(query)),
      map(({ d }) => d)
    );
  }

  search(query: string): void {
    this.searchTerms.next(query);
  }
}
