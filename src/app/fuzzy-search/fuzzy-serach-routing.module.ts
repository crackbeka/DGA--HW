import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuzzySearchComponent } from './fuzzy-search.component';

const routes: Routes = [
  {
    path: '',
    component: FuzzySearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuzzyRoutingModule {}
