import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeNumber'
})
export class ChangeNumberPipe implements PipeTransform {

  transform(value: any): unknown {
    console.log(value);

    return value + " " + "VND";
  }

}
