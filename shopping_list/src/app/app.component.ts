import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showRecipeList = true;
  showShoppingList = false;

  showTheRecipeList() {
    this.showRecipeList = true;
    this.showShoppingList = false;
  }

  showTheShoppingList() {
    this.showRecipeList = false;
    this.showShoppingList = true;
  }
}
