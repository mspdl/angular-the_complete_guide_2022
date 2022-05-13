import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    console.log(this.ingredients);
  }
}
