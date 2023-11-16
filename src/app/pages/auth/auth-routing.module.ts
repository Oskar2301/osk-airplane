import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthEnum } from "../../common/enums/route.enum";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: AuthEnum.Login,
        component: LoginComponent
      },
      {
        path: AuthEnum.Register,
        component: RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
