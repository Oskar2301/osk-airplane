import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { IForgotApi } from '../../../api/auth/auth-api.interface';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss', '../auth.styles.scss'],
  animations: [fadeInOnEnterAnimation()],
})
export class ForgotPasswordComponent {
  public isLoading = this.authService.isLoading;
  public forgotForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  // ICONS
  public readonly logoImage = 'assets/images/earth_logo.png';
  public readonly planeImage = 'assets/images/forgot-password.png';

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {}

  public get isValid(): boolean {
    return this.forgotForm.valid;
  }

  public submitEmail(): void {
    const data: IForgotApi = {
      email: this.forgotForm.value.email || '',
    };

    this.authService.forgotPassword(data);
  }
}
