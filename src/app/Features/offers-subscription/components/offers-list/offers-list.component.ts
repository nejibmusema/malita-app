import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import {
  invokeOffersAPI,
  refreshOffersAPI,
  selectSortedOffers,
  invokeSubscriptionsAPI,
  selectSubscriptionById,
} from '../../store';
import { OffersDetailComponent } from '..';
import { Offer } from '../../models';
import { LoaderButtonConfig } from '@malita/shared';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  public offersList: Offer[];
  public buttonConfig: LoaderButtonConfig = {
    name: 'Refresh',
    timeInterval: 10,
    isDisabled: false,
  };
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
    const dialogRef = this.dialog.open(OffersDetailComponent, {
      data: event.offerId,
      width: window.innerWidth > 640 ? '45%' : '100%',
      maxHeight: '90vh',
    });

    dialogRef.afterClosed().subscribe(({ event, data }) => {
      if (!event) {
        return;
      }
    });
  }

  public refreshOffers(event: boolean) {
    if (event) this._store.dispatch(refreshOffersAPI());
  }
}
