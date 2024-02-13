import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
})
export class CalendarComponent {
  @ViewChild('modalContent', { static: true }) modalContent:
    | TemplateRef<any>
    | undefined;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  activeDayIsOpen = false;

  events: CalendarEvent[] = [];

  selectedView = 'grid';

  colors: any = [
    {
      primary: '#1e90ff',
    },
    {
      primary: '#ad2121',
    },
    {
      primary: '#e3bc08',
    },
    {
      primary: '#41C106',
    },
  ];

  setView(view: CalendarView) {
    this.view = view;
  }
}
