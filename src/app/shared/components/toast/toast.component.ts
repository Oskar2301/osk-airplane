import { Component } from '@angular/core';
import { Toast } from 'ngx-toastr';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent extends Toast {
  public readonly closeSvg = 'assets/svg/close.svg';
}
