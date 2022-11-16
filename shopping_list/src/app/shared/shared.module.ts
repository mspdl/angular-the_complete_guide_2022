import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';
import { LoadSpinnerComponent } from './load-spinner/load-spinner.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    AlertComponent,
    LoadSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  exports: [
    AlertComponent,
    LoadSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
})
export class SharedModule {}
