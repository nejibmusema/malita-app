import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@malita/authentication';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isLoggedIn$: Observable<boolean>;
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit() {
    this.isLoggedIn$ = this._authService.isAuthenticated();
  }

  public logout() {
    this._authService.logout().subscribe((response) => {
      this._router.navigate(['/auth/login']);
    });
  }
}
