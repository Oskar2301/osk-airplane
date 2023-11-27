import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ILoginApi } from '../../../api/auth/auth-api.interface';
import { AuthService } from '../../../shared/services/auth.service';
import { AuthNavigateEnum } from '../../../common/enums/route.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.styles.scss'],
})
export class LoginComponent {
  public isLoading = this.authService.isLoading;
  public loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  // ENUMS
  public readonly AuthNavigateEnum = AuthNavigateEnum;

  // ICONS
  public readonly logoImage = 'assets/images/earth_logo.png';
  public readonly planeImage = 'assets/images/login.png';

  constructor(
    public readonly authService: AuthService,
    private readonly fb: FormBuilder
  ) {}

  public get isValid(): boolean {
    return this.loginForm.valid;
  }

  public submitLogin(): void {
    const data: ILoginApi = {
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.password || '',
    };

    this.authService.login(data);
  }
}
