import { Component, EventEmitter, Input, Output } from '@angular/core';

type TypeButton = 'submit' | 'button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string;
  @Input() isLoading: boolean | null;
  @Input() isDisabled: boolean | null;
  @Input() typeButton: TypeButton = 'button';
  @Input() styles: string;

  @Output() handleClick = new EventEmitter();

  public clickButton(): void {
    this.handleClick.emit();
  }
}
