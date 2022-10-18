import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  API_URL = 'https://ng-course-recipe-book-bbf68-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(this.API_URL + '/recipes.json', recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
