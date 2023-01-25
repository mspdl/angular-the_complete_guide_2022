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
  Shrunker = 'shrunker',
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
        `${AnimationStates.Normal} <=> ${AnimationStates.Highlighted}`,
        animate(300)
      ),
    ]),
    trigger('wildState', [
      state(
        AnimationStates.Normal,
        style({ backgroundColor: 'red', transform: 'translateX(0) scale(1)' })
      ),
      state(
        AnimationStates.Highlighted,
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px) scale(1)',
        })
      ),
      state(
        AnimationStates.Shrunker,
        style({
          backgroundColor: 'green',
          transform: 'translateX(0px) scale(0.5)',
        })
      ),
      transition(
        `${AnimationStates.Normal} => ${AnimationStates.Highlighted}`,
        animate(300)
      ),
      transition(
        `${AnimationStates.Highlighted} => ${AnimationStates.Normal}`,
        animate(800)
      ),
      transition(`${AnimationStates.Shrunker} <=> *`, [
        style({ backgroundColor: 'orange', borderRadius: '0' }),
        animate(1000, style({ borderRadius: '50px' })),
        animate(500),
      ]),
    ]),
  ],
})
export class AppComponent {
  state = AnimationStates.Normal;
  wildState = AnimationStates.Normal;
  foods = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state === AnimationStates.Normal
      ? (this.state = AnimationStates.Highlighted)
      : (this.state = AnimationStates.Normal);
    this.wildState === AnimationStates.Normal
      ? (this.wildState = AnimationStates.Highlighted)
      : (this.wildState = AnimationStates.Normal);
  }

  onShrink() {
    this.wildState = AnimationStates.Shrunker;
  }

  onAdd(item: any) {
    this.foods.push(item);
  }

  onDelete(item: any) {
    this.foods.splice(this.foods.indexOf(item), 1);
  }
}
