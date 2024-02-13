import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuzzySearchComponent } from './fuzzy-search.component';
import { FuzzyRoutingModule } from './fuzzy-serach-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FuzzySearchComponent],
  imports: [CommonModule, FuzzyRoutingModule, FormsModule],
})
export class FuzzySearchModule {}
