import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginPayload, LoginResponse } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl: any;
  public isAuthenticated$ = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject('environment') environment: any,
    private http: HttpClient
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public login(data: LoginPayload): Observable<LoginResponse> {
    const url = `${this.apiUrl}login`;
    return this.http.post<any>(url, data);
  }

  public logout() {
    const url = `${this.apiUrl}logout`;
    this.isAuthenticated$.next(false);
    localStorage.clear(); // clear anything on the local storage
    return this.http.get<any>(url);
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
  public checkAuthentication(): boolean {
    if (localStorage.getItem('authToken')) return true;
    return false;
  }

  public isAuthenticated(): Observable<boolean> {
    return this.isAuthenticated$;
  }
}
