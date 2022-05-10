import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Ratatouille',
      'This moreish Mediterranean-style vegetable stew is perfect for a super-healthy midweek supper.',
      'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/tips/1d204ad1b42644ae9675a44ed1e6a887.jpeg'
    ),
    new Recipe(
      'Vanilla Cake',
      'A classic butter cake but with Japanese techniques applied for the most plush, soft and moist yellow cake like you’ve never had before.',
      'https://www.recipetineats.com/wp-content/uploads/2020/08/My-best-Vanilla-Cake_9.jpg'
    ),
  ];
}
