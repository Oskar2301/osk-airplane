import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from "./get-started/get-started.component";
import { PagesEnum } from "../common/enums/route.enum";

const routes: Routes = [
  {
    path: PagesEnum.GetStarted,
    component: GetStartedComponent,
    loadChildren: () => import('./get-started/components/earth-three/earth-three.module').then(m => m.EarthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
