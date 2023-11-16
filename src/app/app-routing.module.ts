import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesNavigateEnum } from "./common/enums/route.enum";

const routes: Routes = [
  {
    path: '',
    redirectTo: PagesNavigateEnum.GetStarted,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: PagesNavigateEnum.GetStarted
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
