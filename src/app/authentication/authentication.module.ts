import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import * as fromComponents from './components';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

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
})
export class AuthenticationModule {}
