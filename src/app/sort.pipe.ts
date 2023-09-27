import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: any[], property: number, order: 'asc' | 'desc'): any[] {
    return array;
  }
}
