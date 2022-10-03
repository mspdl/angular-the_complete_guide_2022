import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string): unknown {
    if (value.length === 0) {
      return value;
    } else {
      return value.sort((a, b) => {
        return a[propName] > b[propName] ? 1 : -1;
      });
    }
  }
}
