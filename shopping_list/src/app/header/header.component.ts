import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationPagesEnum } from '../shared/navigation-pages.enum';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  collapsed = true;
  navigationPagesEnum = NavigationPagesEnum;

  onSelect(selection: string) {
    this.featureSelected.emit(selection);
  }
}
