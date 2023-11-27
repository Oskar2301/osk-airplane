import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  IAuthResponse,
  IChangePasswordApi,
  IForgotApi,
  IForgotResponse,
  ILoginApi,
  IRegisterApi
} from './auth-api.interface';
import { AuthEnum } from './auth-api.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  public signIn(body: ILoginApi): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(AuthEnum.Login, body);
  }

  public signUp(body: IRegisterApi): Observable<IAuthResponse> {
    return this.http.post<IAuthResponse>(AuthEnum.Register, body);
  }

  public forgotPassword(body: IForgotApi): Observable<IForgotResponse> {
    return this.http.post<IForgotResponse>(AuthEnum.Forgot, body);
  }

  public changePassword(body: IChangePasswordApi): Observable<IForgotResponse> {
    return this.http.post<IForgotResponse>(AuthEnum.ChangePassword, body);
  }
}
