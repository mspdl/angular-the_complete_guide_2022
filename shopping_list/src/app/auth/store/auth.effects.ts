import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as AuthActions from './auth.actions';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthEffects {
  API_URL_SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`;
  API_URL_SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`;

  @Effect()
  authSignup = this.actions$.pipe(ofType(AuthActions.SIGNUP_START));

  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http
        .post<AuthResponseData>(this.API_URL_SIGN_IN, {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true,
        })
        .pipe(
          map((resData) => {
            const expirationDate = new Date(
              new Date().getTime() + +resData.expiresIn * 1000
            );
            return new AuthActions.AuthenticateSucess({
              email: resData.email,
              userId: resData.localId,
              token: resData.idToken,
              expirationDate,
            });
          }),
          catchError((errorResponse) => {
            let errorMessage = 'An error occurred';
            if (!errorResponse.error || !errorResponse.error.error) {
              return of(new AuthActions.AuthenticateFail(errorMessage));
            } else {
              switch (errorResponse.error.error.message) {
                case 'EMAIL_EXISTS':
                  errorMessage =
                    'The email address is already in use by another account.';
                  break;
                case 'OPERATION_NOT_ALLOWED':
                  errorMessage =
                    'Password sign-in is disabled for this project.';
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
            return of(new AuthActions.AuthenticateFail(errorMessage));
          })
        );
    })
  );

  @Effect({ dispatch: false })
  authSuccess = this.actions$.pipe(
    ofType(AuthActions.AUTHENTICATE_SUCCESS),
    tap(() => {
      this.router.navigate(['/']);
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
