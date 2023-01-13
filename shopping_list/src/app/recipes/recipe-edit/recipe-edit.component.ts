import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../store/recipe.actions';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeId: number;
  editMode: boolean = false;
  recipeForm: UntypedFormGroup;

  ONLY_POSITIVE_NUMBERS = /^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/;

  private storeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePatch = '';
    let recipeDescription = '';
    let recipeIngredients = new UntypedFormArray([]);

    if (this.editMode) {
      this.storeSub = this.store
        .select('recipes')
        .pipe(
          map((recipeState) => {
            return recipeState.recipes.find((recipe, index) => {
              return index === this.recipeId;
            });
          })
        )
        .subscribe((recipe) => {
          recipeName = recipe.name;
          recipeImagePatch = recipe.imagePath;
          recipeDescription = recipe.description;
          if (recipe['ingredients']) {
            recipe.ingredients.forEach((ingredient) => {
              recipeIngredients.push(
                new UntypedFormGroup({
                  name: new UntypedFormControl(
                    ingredient.name,
                    Validators.required
                  ),
                  amount: new UntypedFormControl(ingredient.amount, [
                    Validators.required,
                    Validators.pattern(this.ONLY_POSITIVE_NUMBERS),
                  ]),
                })
              );
            });
          }
        });
    }

    this.recipeForm = new UntypedFormGroup({
      name: new UntypedFormControl(recipeName, Validators.required),
      imagePath: new UntypedFormControl(recipeImagePatch, Validators.required),
      description: new UntypedFormControl(
        recipeDescription,
        Validators.required
      ),
      ingredients: recipeIngredients,
    });
  }

  get controls() {
    return (<UntypedFormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<UntypedFormArray>this.recipeForm.get('ingredients')).push(
      new UntypedFormGroup({
        name: new UntypedFormControl(null, Validators.required),
        amount: new UntypedFormControl(null, [
          Validators.required,
          Validators.pattern(this.ONLY_POSITIVE_NUMBERS),
        ]),
      })
    );
  }

  onClearIngredients() {
    (<UntypedFormArray>this.recipeForm.get('ingredients')).clear();
  }

  onDeleteIngredient(index: number) {
    (<UntypedFormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.navigateToPreviousPage();
  }

  navigateToPreviousPage() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(
        new RecipesActions.UpdateRecipe({
          index: this.recipeId,
          newRecipe: this.recipeForm.value,
        })
      );
    } else {
      this.store.dispatch(new RecipesActions.AddRecipe(this.recipeForm.value));
    }
    this.navigateToPreviousPage();
  }

  ngOnDestroy(): void {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
