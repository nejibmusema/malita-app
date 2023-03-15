import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionModel } from '../../models';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.scss'],
})
export class OffersDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<OffersDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public subscriptionList: SubscriptionModel[]
  ) {}

  public sortSubscription(type: string) {
    switch (type) {
      case 'Asc': {
        this.subscriptionList.sort(this._ascSort);
        break;
      }
      case 'Desc': {
        this.subscriptionList.sort(this._descSort);
        break;
      }
    }
  }

  /**
   * sorts the array in asc order based on contract Start date
   * @param a
   * @param b
   * @returns
   */
  private _ascSort(a: SubscriptionModel, b: SubscriptionModel) {
    if (a.name < b.name || a.line < b.line) {
      return -1;
    }
    if (a.name > b.name || a.line > b.line) {
      return 1;
    }
    return 0;
  }

  /**
   * sorts the array in desc order based on contract Start Date
   * @param a
   * @param b
   * @returns
   */
  private _descSort(a: SubscriptionModel, b: SubscriptionModel) {
    if (a.name < b.name || a.line < b.line) {
      return 1;
    }
    if (a.name > b.name || a.line > b.line) {
      return -1;
    }
    return 0;
  }
}
