import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../users/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.authUrl;
  key = environment.apiKey;

  user = new Subject<User>();
  expirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string): Observable<any> {
    const url = this.baseUrl + 'signUp' + '?key=' + this.key;
    const payLoad = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    return this.http.post<AuthResponse>(url, payLoad).pipe(
      tap((response: AuthResponse) => {
        this.handleAuthentication(
          response.email,
          response.localId,
          response.idToken,
          +response.expiresIn
        );
      })
    );
  }

  signIn(email: string, password: string): Observable<any> {
    const url = this.baseUrl + 'signInWithPassword' + '?key=' + this.key;
    const payLoad = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    console.log(url);
    return this.http.post<AuthResponse>(url, payLoad).pipe(
      tap((response: AuthResponse) => {
        this.handleAuthentication(
          response.email,
          response.localId,
          response.idToken,
          Number(response.expiresIn)
        );
      })
    );
  }

  private handleAuthentication(
    email: string,
    password: string,
    id: string,
    expiresIn: number
  ) {
    expiresIn = expiresIn * 100;
    const expirationDate = new Date(new Date().getTime() + expiresIn);
    const user = new User(email, password, id, expirationDate);
    this.user.next(user);
    this.autoLogOut(expiresIn);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  logOut() {
    const user = new User();
    this.user.next(user);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.expirationTimer) {
      clearTimeout(this.expirationTimer);
    }
    this.expirationTimer = null;
  }

  autoLogIn() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString != null) {
      const userData = JSON.parse(userDataString);
      console.log(userData);
      this.user.next(userData);

      const tokenExpirationTime =
        new Date(userData._tokenExpirationTime).getTime() -
        new Date().getTime();
      this.autoLogOut(tokenExpirationTime);
    }
  }

  autoLogOut(tokenExpirationTime: number) {
    console.log(tokenExpirationTime);
    console.log(new Date(new Date().getTime() + tokenExpirationTime));
    this.expirationTimer = setTimeout(() => {
      this.logOut();
    }, tokenExpirationTime);
  }
}

export interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}
