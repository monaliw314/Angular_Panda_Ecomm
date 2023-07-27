import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatAmount'
})
export class FormatAmountPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value === null || value === undefined) {
      return '';
    }

    // Convert the input value to a string (if it's a number)
    const amountString = typeof value === 'number' ? value.toString() : value;

    // Use regex to add commas as thousands separators
    return amountString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
