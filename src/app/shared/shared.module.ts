import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromComponents from './components';
import * as fromDirectives from './directives';
import * as fromServices from './services';
import { MaterialModule } from '@malita/material';

@NgModule({
  declarations: [fromComponents.components, fromDirectives.directives],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [fromComponents.components, fromDirectives.directives],
  providers: [fromServices.services],
})
export class SharedModule {}
