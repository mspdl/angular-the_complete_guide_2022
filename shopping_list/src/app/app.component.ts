import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './auth/store/auth.actions';
import { LoggingService } from './logging.service';
import * as fromApp from './store/app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromApp.AppState>,
    private logginService: LoggingService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(AuthActions.autoLogin());
    this.logginService.printLog('Hello from AppComponent ngOnInit');
  }
}
