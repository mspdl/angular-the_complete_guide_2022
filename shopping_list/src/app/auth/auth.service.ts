import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL_SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`;
  API_URL_SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`;

  private tokenExperirationTimer: NodeJS.Timeout;

  constructor(private store: Store<fromApp.AppState>) {}

  setLogoutTimer(experirationDuration: number) {
    this.tokenExperirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, experirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExperirationTimer) {
      clearTimeout(this.tokenExperirationTimer);
      this.tokenExperirationTimer = null;
    }
  }
}
