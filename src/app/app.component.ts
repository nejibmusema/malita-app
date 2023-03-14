import { Component, OnInit } from '@angular/core';
import { AuthService } from '@malita/authentication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this._checkAuth();
  }

  /**
   * this method checks the local storage and emit value to isAuthenticated subject
   */
  private _checkAuth() {
    if (this._authService.readAuthTokenFromStorage())
      this._authService.isAuthenticated$.next(true);
  }
}
