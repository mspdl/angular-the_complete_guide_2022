import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  API_KEY = 'AIzaSyBSQGFOYDkCxN_UVLTeCRHfQQT3MRFSRj0';
  API_URL_SIGN_UP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.API_KEY}`;
  API_URL_SIGN_IN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.API_KEY}`;

  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(this.API_URL_SIGN_UP, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError((errorResponse) => {
          let errorMessage = 'An error occurred';
          if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
          } else {
            switch (errorResponse.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage =
                  'The email address is already in use by another account.';
            }
          }
          return throwError(errorMessage);
        })
      );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.API_URL_SIGN_IN, {
      email,
      password,
      returnSecureToken: true,
    });
  }
}
