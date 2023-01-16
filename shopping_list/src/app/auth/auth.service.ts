import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenExperirationTimer: any;

  constructor(private store: Store<fromApp.AppState>) {}

  setLogoutTimer(experirationDuration: number) {
    this.tokenExperirationTimer = setTimeout(() => {
      this.store.dispatch(AuthActions.logout());
    }, experirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExperirationTimer) {
      clearTimeout(this.tokenExperirationTimer);
      this.tokenExperirationTimer = null;
    }
  }
}
