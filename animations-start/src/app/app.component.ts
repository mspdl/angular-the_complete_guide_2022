import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

enum AnimationStates {
  Normal = 'normal',
  Highlighted = 'highlighted',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state(
        AnimationStates.Normal,
        style({ backgroundColor: 'red', transform: 'translateX(0)' })
      ),
      state(
        AnimationStates.Highlighted,
        style({ backgroundColor: 'blue', transform: 'translateX(100px)' })
      ),
      transition(
        `${AnimationStates.Normal} => ${AnimationStates.Highlighted}`,
        animate(300)
      ),
      transition(
        `${AnimationStates.Highlighted} => ${AnimationStates.Normal}`,
        animate(800)
      ),
    ]),
  ],
})
export class AppComponent {
  state = AnimationStates.Normal;
  foods = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state === AnimationStates.Normal
      ? (this.state = AnimationStates.Highlighted)
      : (this.state = AnimationStates.Normal);
  }

  onAdd(item: any) {
    this.foods.push(item);
  }

  onDelete(item: any) {
    this.foods.splice(this.foods.indexOf(item), 1);
  }
}
