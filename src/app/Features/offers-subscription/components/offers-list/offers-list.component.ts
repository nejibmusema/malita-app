import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import {
  invokeOffersAPI,
  selectOffers,
  selectSortedOffers,
  invokeSubscriptionsAPI,
  selectSubscriptionById,
} from '../../store';
import { OffersDetailComponent } from '..';
import { Offer } from '../../models';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  public offersList: Offer[];
  constructor(private _store: Store, public dialog: MatDialog) {}

  ngOnInit() {
    this._store.dispatch(invokeOffersAPI());
    this.getOffers('Asc');
  }

  public getOffers(sortType: string) {
    this._store
      .pipe(select(selectSortedOffers(sortType)))
      .subscribe((response) => {
        this.offersList = response;
      });
  }

  public onCardOpened(event: { offerId: number }) {
    this._getOfferDetails(event.offerId).subscribe((response) => {
      if (!response) {
        this._store.dispatch(
          invokeSubscriptionsAPI({ offerId: event.offerId })
        );
      } else {
        const dialogRef = this.dialog.open(OffersDetailComponent, {
          data: response?.subscriptions,
          width: window.innerWidth > 640 ? '45%' : '100%',
          maxHeight: '90vh',
        });

        dialogRef.afterClosed().subscribe(({ event, data }) => {
          if (!event) {
            return;
          }
        });
      }
    });
  }

  private _getOfferDetails(offerId: number) {
    return this._store.pipe(select(selectSubscriptionById(offerId)));
  }
}
