import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OffersDetailComponent } from '..';
import { Offer } from '../../models';
import { OffersService } from '../../services';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  public offersList: Offer[];

  constructor(
    private _offersService: OffersService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this._getOffers();
  }

  private _getOffers() {
    this._offersService.getOffers().subscribe((response) => {
      this.offersList = response;
    });
  }

  public onCardOpened(event: { offerId: number }) {
    this._getOfferDetails(event.offerId).subscribe((response) => {
      const dialogRef = this.dialog.open(OffersDetailComponent, {
        data: response,
        width: window.innerWidth > 640 ? '45%' : '100%',
        maxHeight: '90vh',
      });

      dialogRef.afterClosed().subscribe(({ event, data }) => {
        if (!event) {
          return;
        }
      });
    });
  }

  private _getOfferDetails(offerId: number) {
    return this._offersService.getOfferDetail(offerId);
  }

  public sortOffers(type: string) {
    switch (type) {
      case 'Asc': {
        this.offersList.sort(this._ascSortOffers);
        break;
      }

      case 'Desc': {
        this.offersList.sort(this._descSortOffers);
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
  private _ascSortOffers(a: Offer, b: Offer) {
    if (new Date(a.contractStartDate) < new Date(b.contractStartDate)) {
      return -1;
    }
    if (new Date(a.contractStartDate) > new Date(b.contractStartDate)) {
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
  private _descSortOffers(a: Offer, b: Offer) {
    if (new Date(a.contractStartDate) < new Date(b.contractStartDate)) {
      return 1;
    }
    if (new Date(a.contractStartDate) > new Date(b.contractStartDate)) {
      return -1;
    }
    return 0;
  }
}
