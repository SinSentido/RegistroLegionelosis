import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'index'
})
export class IndexPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
