import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginPayload, LoginResponse } from '../models';

@Injectable()
export class AuthService {
  private apiUrl: any;

  constructor(
    @Inject('environment') environment: any,
    private http: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public login(data: LoginPayload): Observable<LoginResponse> {
    const url = `${this.apiUrl}login`;
    return this.http
      .post<any>(url, data)
      .pipe(catchError((err) => throwError(() => new Error(err))));
  }

  public logout() {
    const url = `${this.apiUrl}/logout`;
    localStorage.clear(); // clear anything on the local storage
    return this.http
      .get<any>(url)
      .pipe(catchError((err) => throwError(() => new Error(err))));
  }

  /**
   * write the access token on the local storage
   * @param data Access Token
   */
  public saveAccessTokenToStorage(data: LoginResponse) {
    localStorage.setItem('authToken', JSON.stringify(data.authToken));
  }

  /**
   *
   * @returns access token from the local storage
   */
  public checkAuthentication(): LoginResponse {
    return JSON.parse(localStorage.getItem('authToken') ?? null);
  }
}
