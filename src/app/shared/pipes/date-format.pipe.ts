import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date, format: string = 'MM/dd/yyyy'): string {
    const day = value.getDate().toString().padStart(2, '0');
    const month = (value.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = value.getFullYear();

    switch (format) {
      case 'MM/dd/yyyy':
        return `${month}/${day}/${year}`;
      case 'dd/MM/yyyy':
        return `${day}/${month}/${year}`;
      // Puedes agregar más casos de formato aquí
      default:
        return value.toDateString(); // Fallback
    }
  }
}
