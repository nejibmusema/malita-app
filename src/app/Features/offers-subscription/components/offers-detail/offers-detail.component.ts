import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { SubscriptionModel } from '../../models';
import { invokeSubscriptionsAPI, selectSubscriptionById } from '../../store';

@Component({
  selector: 'app-offers-detail',
  templateUrl: './offers-detail.component.html',
  styleUrls: ['./offers-detail.component.scss'],
})
export class OffersDetailComponent implements OnInit {
  public subscriptionList: SubscriptionModel[];
  constructor(
    public dialogRef: MatDialogRef<OffersDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public offerId: number,
    private _store: Store
  ) {}

  ngOnInit() {
    this._store.dispatch(invokeSubscriptionsAPI({ offerId: this.offerId }));
    this.getOfferDetails('Asc');
  }

  public getOfferDetails(sortType: string) {
    debugger;
    this._store
      .pipe(select(selectSubscriptionById(this.offerId, sortType)))
      .subscribe((response) => {
        this.subscriptionList = response?.subscriptions;
      });
  }
}
