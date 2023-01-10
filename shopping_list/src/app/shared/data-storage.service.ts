import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import * as RecipesActions from '../recipes/store/recipe.actions';
import * as fromApp from '../store/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private store: Store<fromApp.AppState>
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(environment.API_URL + '/recipes.json', recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(environment.API_URL + '/recipes.json').pipe(
      map((recipes) => {
        return !recipes
          ? ([] as Recipe[])
          : recipes.map((recipe) => {
              return {
                ...recipe,
                ingredients: recipe.ingredients ? recipe.ingredients : [],
              };
            });
      }),
      tap((recipes) => {
        this.store.dispatch(new RecipesActions.SetRecipes(recipes));
      })
    );
  }
}
