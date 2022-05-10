import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output() addEmitter = new EventEmitter<Ingredient>();

  onAdd(nameInput: string, amountInput: number) {
    const newIngredient: Ingredient = { name: nameInput, amount: amountInput };
    this.addEmitter.emit(newIngredient);
  }
}
