import { Component, Input, OnInit } from '@angular/core';
import { SubscriptionModel } from '../../models';

@Component({
  selector: 'app-subscription-item',
  templateUrl: './subscription-item.component.html',
  styleUrls: ['./subscription-item.component.scss'],
})
export class SubscriptionItemComponent {
  @Input() subscription: SubscriptionModel;
  public panelOpenState = false;
}
