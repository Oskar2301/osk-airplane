import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ToastComponent } from '../components/toast/toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private readonly toastService: ToastrService) {}

  public success(title?: string, message?: string): void {
    this.toastService.success(message, title, {
      toastComponent: ToastComponent,
      toastClass: 'success',
      tapToDismiss: false,
    });
  }

  public error(title?: string, message?: string): void {
    this.toastService.error(title, message, {
      toastComponent: ToastComponent,
      toastClass: 'error',
      tapToDismiss: false,
    });
  }
}
