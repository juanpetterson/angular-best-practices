import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  // pure: false, // changed to impure to sort again when the field name was changed.
  // // but it impacts on performance
})
export class OrderByPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    if (!Array.isArray(array)) {
      return array;
    }

    return array.sort((x, y) =>
      x[field] > y[field] ? 1 : x[field] < y[field] ? -1 : 0
    );
  }
}
