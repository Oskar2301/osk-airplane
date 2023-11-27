import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SuccessPageComponent } from './success-page/success-page.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    SuccessPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    NgOptimizedImage,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AuthModule {}
