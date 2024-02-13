import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipeComponent } from './date-pipe.component';
import { DateRoutingModule } from './date-pipe-routing.module';
import { CustomPipe } from '../custom-pipe.pipe';

@NgModule({
  declarations: [DatePipeComponent, CustomPipe],
  imports: [CommonModule, DateRoutingModule, CommonModule],
})
export class DatePipeModule {}
