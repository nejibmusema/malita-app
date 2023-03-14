import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { LoginPayload, LoginResponse } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public isPasswordVisible = false;
  public authSubject$ = new Subject<LoginResponse>();

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this.loginFormGroup = this.formMaker();
  }

  public formMaker(): FormGroup<any> {
    return this._formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/), // email pattern validation
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  public showPassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  onSubmit() {
    this._authService.login(this.loginFormGroup.value).subscribe((response) => {
      this._authService.saveAccessTokenToStorage(response); // writing it on the local storage;
      this.authSubject$.next(response);
    });
  }
}
