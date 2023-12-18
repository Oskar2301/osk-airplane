import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';
import { Observable, tap } from 'rxjs';
import { ConfigService } from '../../shared/services/config.service';
import { ToastService } from '../../shared/services/toast.service';
import { Router } from '@angular/router';
import { AuthNavigateEnum } from '../enums/route.enum';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private readonly toastService: ToastService,
    private readonly router: Router,
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const baseUrl = this.configService.getApiUrl() + request.url;

    request = request.clone({ url: baseUrl });

    if (this.authService.getToken()) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`,
        },
      });
    }

    return next.handle(request).pipe(
      tap(
        () => {},
        async (err) => {
          this.toastService.error(err.error.message, 'Error');

          if (err.status !== 401) {
            return;
          }

          this.authService.deleteToken();
          this.router.navigate([AuthNavigateEnum.Login]);
        },
      ),
    );
  }
}
