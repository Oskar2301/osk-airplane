import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { IChangePasswordApi } from '../../../api/auth/auth-api.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthNavigateEnum } from '../../../common/enums/route.enum';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss', '../auth.styles.scss'],
  animations: [fadeInOnEnterAnimation()],
})
export class ChangePasswordComponent implements OnInit {
  public isLoading = this.authService.isLoading;
  public token: string | null;
  public changeForm = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  // ICONS
  public readonly logoImage = 'assets/images/earth_logo.png';
  public readonly planeImage = 'assets/images/forgot-password.png';

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get('token');
    if (!this.token) {
      this.router.navigate([AuthNavigateEnum.Login]);
    }
  }

  public get isValid(): boolean {
    return this.changeForm.valid;
  }

  public get isPasswordEqual(): boolean {
    return (
      this.changeForm.value.password === this.changeForm.value.confirmPassword
    );
  }

  public submitEmail(): void {
    const data: IChangePasswordApi = {
      password: this.changeForm.value.password || '',
    };

    if (this.token) {
      this.authService.changePassword(data, this.token);
    }
  }
}
