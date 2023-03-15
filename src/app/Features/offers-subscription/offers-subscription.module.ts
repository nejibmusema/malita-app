import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@malita/material';
import { SharedModule } from '@malita/shared';
import { OffersSubscriptionRoutingModule } from './offers-subscription-routing.module';
import * as fromComponents from './components';
import * as fromService from './services';

@NgModule({
  declarations: [fromComponents.components],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    OffersSubscriptionRoutingModule,
  ],
  providers: [fromService.services],
})
export class OffersSubscriptionModule {}
