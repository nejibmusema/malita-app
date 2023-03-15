import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: ` <div class="spinner">
    <div class="bounce1"></div>
    <div class="bounce2"></div>
    <div class="bounce3"></div>
  </div>`,
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {}
