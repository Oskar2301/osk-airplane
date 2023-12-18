import { Injectable } from '@angular/core';
import * as jwt from 'jwt-decode';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  AuthNavigateEnum,
  PagesNavigateEnum,
} from '../../common/enums/route.enum';
import { AuthApiService } from '../../api/auth/auth-api.service';
import { Router } from '@angular/router';
import {
  IChangePasswordApi,
  IForgotApi,
  ILoginApi,
  IRegisterApi,
} from '../../api/auth/auth-api.interface';
import { BehaviorSubject, finalize } from 'rxjs';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly isLoadingSubject = new BehaviorSubject<boolean>(false);
  public readonly isLoading = this.isLoadingSubject.asObservable();

  constructor(
    private readonly authApiService: AuthApiService,
    private readonly router: Router,
  ) {}

  public getToken(): string {
    return localStorage.getItem('accessToken')!;
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;
    return jwt.jwtDecode(token);
  }

  public setToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  public deleteToken() {
    localStorage.removeItem('accessToken');
  }

  public login(data: ILoginApi): void {
    this.isLoadingSubject.next(true);
    this.authApiService
      .signIn(data)
      .pipe(
        untilDestroyed(this),
        finalize(() => this.isLoadingSubject.next(false)),
      )
      .subscribe(async ({ token }) => {
        if (token) {
          this.setToken(token);
          await this.router.navigate([PagesNavigateEnum.TripsPage]);
        }
      });
  }

  public forgotPassword(data: IForgotApi): void {
    this.isLoadingSubject.next(true);
    this.authApiService
      .forgotPassword(data)
      .pipe(
        untilDestroyed(this),
        finalize(() => this.isLoadingSubject.next(false)),
      )
      .subscribe(async () => {
        await this.router.navigate([AuthNavigateEnum.Success], {
          queryParams: { type: 'forgot' },
        });
      });
  }

  public changePassword(data: IChangePasswordApi, token: string): void {
    this.setToken(token);
    this.isLoadingSubject.next(true);

    this.authApiService
      .changePassword(data)
      .pipe(
        untilDestroyed(this),
        finalize(() => {
          this.deleteToken();
          this.isLoadingSubject.next(false);
        }),
      )
      .subscribe(async () => {
        await this.router.navigate([AuthNavigateEnum.Success], {
          queryParams: { type: 'change' },
        });
      });
  }

  public register(data: IRegisterApi): void {
    this.isLoadingSubject.next(true);

    this.authApiService
      .signUp(data)
      .pipe(
        untilDestroyed(this),
        finalize(() => this.isLoadingSubject.next(false)),
      )
      .subscribe(async ({ token }) => {
        if (token) {
          this.setToken(token);
          await this.router.navigate([PagesNavigateEnum.TripsPage]);
        }
      });
  }

  public async logout(): Promise<void> {
    localStorage.removeItem('accessToken');
    await this.router.navigate([AuthNavigateEnum.Login]);
  }
}
