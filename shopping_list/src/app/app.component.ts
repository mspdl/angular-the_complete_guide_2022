import { Component } from '@angular/core';
import { NavigationPagesEnum } from './shared/navigation-pages.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  navigationPagesEnum = NavigationPagesEnum;
  loadedFeature: string = this.navigationPagesEnum.recipe;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
