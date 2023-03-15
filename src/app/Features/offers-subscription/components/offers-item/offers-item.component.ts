import { EventEmitter, Output } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Offer } from '../../models';

@Component({
  selector: 'app-offers-item',
  templateUrl: './offers-item.component.html',
  styleUrls: ['./offers-item.component.scss'],
})
export class OffersItemComponent {
  @Input() offer: Offer;
  @Output() onCardOpened = new EventEmitter<any>();

  public openCard(offerId: number) {
    this.onCardOpened.emit({ offerId: offerId });
  }
}
