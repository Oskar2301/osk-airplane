import { Component, Input } from '@angular/core';

export interface IOption {
  title: string;
  svgIcon?: string;
  class?: string;
  onClick: () => any;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() options: IOption[];
}
