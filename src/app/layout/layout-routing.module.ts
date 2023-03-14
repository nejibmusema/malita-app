import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@malita/authentication';
import { OffersSubscriptionModule } from '../Features/offers-subscription/offers-subscription.module';
import * as fromComponents from './components';
const routes: Routes = [
  {
    path: 'home',
    component: fromComponents.MainComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => OffersSubscriptionModule,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
