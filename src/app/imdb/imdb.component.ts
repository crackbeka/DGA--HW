import { Component, OnInit } from '@angular/core';
import { ImdbService } from './imdb.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
})
export class ImdbComponent implements OnInit {
  movies$: Observable<any> | undefined;
  constructor(private ImdbService: ImdbService) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    this.movies$ = this.ImdbService.getMovieDetails();
  }
}
