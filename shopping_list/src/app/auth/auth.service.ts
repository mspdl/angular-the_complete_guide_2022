import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

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

  user = new BehaviorSubject<User>(null);

  private tokenExperirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.API_URL_SIGN_UP, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAuthentication(responseData);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.API_URL_SIGN_IN, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAuthentication(responseData);
        })
      );
  }

  autoLogin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExperiationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExperiationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const experirationDuration =
        new Date(userData._tokenExperiationDate).getTime() -
        new Date().getTime();
      this.autoLogout(experirationDuration);
    }
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExperirationTimer) {
      clearTimeout(this.tokenExperirationTimer);
    }
    this.tokenExperirationTimer = null;
  }

  autoLogout(experirationDuration: number) {
    this.tokenExperirationTimer = setTimeout(() => {
      this.logout();
    }, experirationDuration);
  }

  private handleAuthentication(responseData: AuthResponseData) {
    const expirationDate = new Date(
      new Date().getTime() + +responseData.expiresIn * 1000
    );
    const user = new User(
      responseData.email,
      responseData.localId,
      responseData.idToken,
      expirationDate
    );
    this.user.next(user);
    this.autoLogout(+responseData.expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    } else {
      switch (errorResponse.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage =
            'The email address is already in use by another account.';
          break;
        case 'OPERATION_NOT_ALLOWED':
          errorMessage = 'Password sign-in is disabled for this project.';
          break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          errorMessage =
            'We have blocked all requests from this device due to unusual activity. Try again later.';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage =
            'There is no user record corresponding to this identifier. The user may have been deleted.';
          break;
        case 'INVALID_PASSWORD':
          errorMessage =
            'The password is invalid or the user does not have a password.';
          break;
        case 'USER_DISABLED':
          errorMessage =
            'The user account has been disabled by an administrator.';
          break;
      }
    }
    return throwError(errorMessage);
  }
}
