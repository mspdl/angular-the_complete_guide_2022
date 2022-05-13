import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('recipeItem') recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onSelectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
