import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Injectable()
export class NotificationService {
  constructor(public _snackBar: MatSnackBar) {}

  public openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
