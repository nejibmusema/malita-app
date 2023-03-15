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
}
