import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input('recipeItem') recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<Recipe>();

  onSelectRecipe() {
    this.recipeSelected.emit();
  }
}
