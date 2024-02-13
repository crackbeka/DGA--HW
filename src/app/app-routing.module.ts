import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive-forms',
    loadChildren: () =>
      import('./reactive-forms/reactive-forms.module').then(
        (m) => m.ReactivEFormsModule
      ),
  },
  {
    path: 'imdb',
    loadChildren: () => import('./imdb/imdb.module').then((m) => m.ImdbModule),
  },
  {
    path: 'date-pipe',
    loadChildren: () =>
      import('./date-pipe/date-pipe.module').then((m) => m.DatePipeModule),
  },
  {
    path: 'calendar',
    loadChildren: () =>
      import('./calendar/calendar.module').then((m) => m.CalendarEModule),
  },
  {
    path: 'fuzzy-search',
    loadChildren: () =>
      import('./fuzzy-search/fuzzy-search.module').then(
        (m) => m.FuzzySearchModule
      ),
  },
  {
    path: '',
    redirectTo: 'reactive-forms',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
