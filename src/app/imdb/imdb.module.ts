import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImdbComponent } from './imdb.component';
import { ImdbRoutingModule } from './imdb-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ImdbComponent],
  imports: [CommonModule, ImdbRoutingModule, MatCardModule],
})
export class ImdbModule {}
