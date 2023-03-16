import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromComponents from './components';
const routes: Routes = [
  {
    path: '',
    component: fromComponents.OffersListComponent,
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersSubscriptionRoutingModule {}
