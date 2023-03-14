import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  declarations: [fromComponents.components],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [fromServices.services],
})
export class AuthenticationModule {}
