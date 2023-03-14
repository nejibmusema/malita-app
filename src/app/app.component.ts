import { Component, OnInit } from '@angular/core';
import { AuthService } from '@malita/authentication';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'malita-app';

  constructor(private _authService: AuthService) {}

  ngOnInit() {
    if (this._authService.checkAuthentication())
      this._authService.isAuthenticated$.next(true);
  }
}
