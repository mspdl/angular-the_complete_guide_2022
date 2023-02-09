import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reserve',
})
export class ReservePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return this.reverseString(value);
  }

  reverseString(str: string): string {
    return str.split('').reverse().join('');
  }
}
