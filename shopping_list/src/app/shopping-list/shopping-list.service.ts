import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIndredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingredient) {
    const idFound = this.ingredients.findIndex(
      (ing) => ing.name.toLowerCase() === newIngredient.name.toLowerCase()
    );
    if (idFound >= 0) {
      this.ingredients[idFound].amount += Number(newIngredient.amount);
    } else {
      this.ingredients.push(newIngredient);
    }
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => {
      this.addIngredient(ingredient);
    });
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(newIngredient: Ingredient, index: number) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
