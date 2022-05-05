import { Component } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Recipe Description',
      'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/tips/1d204ad1b42644ae9675a44ed1e6a887.jpeg'
    ),
  ];
}
