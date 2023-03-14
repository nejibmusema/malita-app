import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationModule } from './authentication/authentication.module';
import { MaterialModule } from './material/material.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => AuthenticationModule,
  },
];

@NgModule({
  imports: [MaterialModule, AuthenticationModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
