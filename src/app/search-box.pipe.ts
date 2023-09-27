import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from './interfaces/products';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(data: IProducts[], SearchText: any): IProducts[] {
    return data.filter(item => item.name.toLowerCase().includes(SearchText.toLowerCase()))
  }
}
