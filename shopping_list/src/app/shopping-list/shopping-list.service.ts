import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    const idFound = this.ingredients.findIndex(
      (ing) => ing.name === newIngredient.name
    );
    if (idFound >= 0) {
      this.ingredients[idFound].amount += Number(newIngredient.amount);
    } else {
      this.ingredients.push(newIngredient);
    }
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => {
      this.addIngredient(ingredient);
    });
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
