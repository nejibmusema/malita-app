import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models';
import { OffersService } from '../../services';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss'],
})
export class OffersListComponent implements OnInit {
  public offersList: Offer[];
  constructor(private _offersService: OffersService) {}

  ngOnInit() {
    this._getOffers();
  }

  private _getOffers() {
    this._offersService.getOffers().subscribe((response) => {
      this.offersList = response;
    });
  }

  public onCardOpened(event: { offerId: number }) {
    console.log(event);
  }
}
