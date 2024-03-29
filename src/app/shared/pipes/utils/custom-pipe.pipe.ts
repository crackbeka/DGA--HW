import { Pipe, PipeTransform } from '@angular/core';
import { isValidDate } from '../utils/is-valid-date';

@Pipe({
  name: 'customPipe',
})
export class CustomPipe implements PipeTransform {
  transform(value: string): string {
    if (!value || !isValidDate(value)) return value;

    const date = new Date(value);
    const formattedDate = date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });

    return formattedDate;
  }
}
