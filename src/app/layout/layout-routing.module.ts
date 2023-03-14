import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffersSubscriptionModule } from '../Features/offers-subscription/offers-subscription.module';
import * as fromComponents from './components';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: fromComponents.MainComponent,
    children: [
      {
        path: 'home',
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
