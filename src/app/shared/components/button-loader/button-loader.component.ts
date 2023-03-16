import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map, Observable, take, timer } from 'rxjs';
import { LoaderButtonConfig } from '../../models';

@Component({
  selector: 'app-button-loader',
  templateUrl: './button-loader.component.html',
  styleUrls: ['./button-loader.component.scss'],
})
export class ButtonLoaderComponent {
  @Input() public config: LoaderButtonConfig;
  @Output() public isPressed = new EventEmitter<boolean>();

  public timer$: Observable<any>;

  public onButtonPress() {
    this.timer$ = this.countDownTimer(this.config.timeInterval);
    this.isPressed.emit(true);
  }

  public countDownTimer(timeInterval: number) {
    this.config.isDisabled = true;
    return timer(0, 1000).pipe(
      take(timeInterval + 1),
      map((secondsElapsed) => {
        if (timeInterval === secondsElapsed) {
          this.config.isDisabled = false;
          return '';
        }
        return timeInterval - secondsElapsed;
      })
    );
  }
}
