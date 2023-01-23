import { state, style, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({ backgroundColor: 'red', transform: 'translateX(0)' })
      ),
      state(
        'highlighted',
        style({ backgroudColor: 'blue', transform: 'translateX(100px)' })
      ),
    ]),
  ],
})
export class AppComponent {
  state = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item: any) {
    this.list.push(item);
  }

  onDelete(item: any) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
