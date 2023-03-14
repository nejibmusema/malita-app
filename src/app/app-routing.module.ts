import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@malita/layout';
import { AuthenticationModule } from './authentication/authentication.module';
import { MaterialModule } from './material/material.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => AuthenticationModule,
  },
  {
    path: '',
    loadChildren: () => LayoutModule,
  },
];

@NgModule({
  imports: [MaterialModule, AuthenticationModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
