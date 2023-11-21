import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IRegisterApi } from '../../../api/auth/auth-api.interface';
import { AuthService } from '../../../shared/services/auth.service';
import { AuthNavigateEnum } from '../../../common/enums/route.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.styles.scss', './register.component.scss'],
})
export class RegisterComponent {
  public isLoading = this.authService.isLoading;
  public registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  // ENUMS
  public readonly AuthNavigateEnum = AuthNavigateEnum;

  // IMAGES
  public readonly logoImage = 'assets/images/earth_logo.png';
  public readonly planeImage = 'assets/images/register.png';

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {}

  public get isValid(): boolean {
    return this.registerForm.valid;
  }

  public submitRegister(): void {
    const data: IRegisterApi = {
      email: this.registerForm.value.email || '',
      name: this.registerForm.value.name || '',
      password: this.registerForm.value.password || '',
    };

    this.authService.register(data);
  }
}
