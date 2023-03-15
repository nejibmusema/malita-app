import { Component, OnInit } from '@angular/core';
import { AuthService } from '@malita/authentication';
import { LoaderComponent } from '@malita/shared';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public loaderComponent = LoaderComponent;

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
