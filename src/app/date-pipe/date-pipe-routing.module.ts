import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatePipeComponent } from './date-pipe.component';

const routes: Routes = [
  {
    path: '',
    component: DatePipeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateRoutingModule {}
