import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Ratatouille',
      'This moreish Mediterranean-style vegetable stew is perfect for a super-healthy midweek supper.',
      'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/tips/1d204ad1b42644ae9675a44ed1e6a887.jpeg',
      [
        new Ingredient('Eggplant', 2),
        new Ingredient('Roma Tomato', 6),
        new Ingredient('Yellow Squash', 2),
        new Ingredient('Zucchini', 2),
      ]
    ),
    new Recipe(
      'Vanilla Cake',
      'A classic butter cake but with Japanese techniques applied for the most plush, soft and moist yellow cake like you’ve never had before.',
      'https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9.jpg',
      [
        new Ingredient('Salt', 0.1),
        new Ingredient('Baking Powder', 2),
        new Ingredient('Baking Soda', 0.5),
        new Ingredient('Butter', 5),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }
}
