import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from '@malita/material';
import { SharedModule } from '@malita/shared';
import { OffersSubscriptionRoutingModule } from './offers-subscription-routing.module';
import * as fromComponents from './components';
import {
  offersReducer,
  subscriptionsReducer,
  OffersEffect,
  SubscriptionsEffect,
} from './store';

@NgModule({
  declarations: [fromComponents.components],
  imports: [
    CommonModule,
    StoreModule.forFeature('myOffers', offersReducer),
    StoreModule.forFeature('mySubscriptions', subscriptionsReducer),
    EffectsModule.forFeature([OffersEffect]),
    EffectsModule.forFeature([SubscriptionsEffect]),
    MaterialModule,
    SharedModule,
    OffersSubscriptionRoutingModule,
  ],
  providers: [],
})
export class OffersSubscriptionModule {}
