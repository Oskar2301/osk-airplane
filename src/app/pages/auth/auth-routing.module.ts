import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthEnum } from '../../common/enums/route.enum';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NonAuthGuard } from '../../common/guards/non-auth.guard';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SuccessPageComponent } from './success-page/success-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [NonAuthGuard],
    children: [
      {
        path: AuthEnum.Login,
        component: LoginComponent,
      },
      {
        path: AuthEnum.Register,
        component: RegisterComponent,
      },
      {
        path: AuthEnum.Success,
        component: SuccessPageComponent,
      },
      {
        path: AuthEnum.ForgotPassword,
        component: ForgotPasswordComponent,
      },
      {
        path: AuthEnum.ChangePassword,
        component: ChangePasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
