import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Directive({
  selector: '[appFormControlError]',
})
export class FormControlErrorDirective implements OnInit, OnDestroy {
  @Input() control: AbstractControl;
  @Input() fieldName: string;

  public errorMessage$: Subscription;
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const formController = this.control as FormControl;
    this.errorMessage$ = this.control?.statusChanges
      .pipe(
        debounceTime(500),
        map(() => {
          const { dirty, invalid, touched } = this.control;
          return (dirty || touched) && invalid
            ? this.getErrorMessage(formController, this.fieldName)
            : '';
        })
      )
      .subscribe((response) => {
        this.el.nativeElement.textContent = response;
      });
  }

  /**
   * this method generates list of error message based on the control errors object
   * @param control control
   * @param fieldName Field name to show on the error message
   * @returns
   */
  private getErrorMessage(control: FormControl, fieldName: string): string {
    if (control.hasError('required')) {
      return `${fieldName} is required`;
    }
    if (control.hasError('email')) {
      return `${fieldName} is invalid`;
    }

    if (control.hasError('pattern')) {
      return `${fieldName} invalid pattern`;
    }

    return '';
  }

  ngOnDestroy(): void {
    this.errorMessage$?.unsubscribe();
  }
}
