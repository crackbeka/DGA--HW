import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImdbComponent } from './imdb.component';
import { ImdbRoutingModule } from './imdb-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ImdbComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImdbRoutingModule,
    MatCardModule,
    MatFormFieldModule,
  ],
})
export class ImdbModule {}
