import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromComponents from './components';
import * as fromDirectives from './directives';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [fromComponents.components, fromDirectives.directives],
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  exports: [fromComponents.components, fromDirectives.directives],
})
export class SharedModule {}
