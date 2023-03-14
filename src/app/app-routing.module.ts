import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@malita/layout';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthGuard } from './authentication/guards';
import { MaterialModule } from './material/material.module';

const routes: Routes = [
  { path: '', redirectTo: 'app/home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => AuthenticationModule,
  },
  {
    path: 'app',
    loadChildren: () => LayoutModule,
  },
];

@NgModule({
  imports: [MaterialModule, AuthenticationModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
