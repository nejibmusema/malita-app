import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public isPasswordVisible = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginFormGroup = this.formMaker();
  }

  public formMaker(): FormGroup<any> {
    return this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public showPassword() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
