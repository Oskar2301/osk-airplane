import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type inputType = 'text' | 'password';

@Component({
  selector: 'app-input-outline',
  templateUrl: './input-outline.component.html',
  styleUrls: ['./input-outline.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputOutlineComponent),
      multi: true,
    },
  ],
})
export class InputOutlineComponent implements ControlValueAccessor {
  @Input() type: inputType = 'text';
  @Input() label: string;

  public isActive = false;
  public value = '';

  public get isTypePassword(): boolean {
    return this.type === 'password';
  }

  public handleFocus(): void {
    this.isActive = true;
  }

  public handleBlur(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (target.value !== '') return;
    this.isActive = false;
  }

  // ControlValueAccessor
  public onChange: (value: string) => void;
  onTouched: () => void;

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
