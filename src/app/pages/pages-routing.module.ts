import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './get-started/get-started.component';
import { PagesEnum } from '../common/enums/route.enum';
import { TripsComponent } from './trips/trips.component';
import { AuthGuard } from '../common/guards/auth.guard';
import { NonAuthGuard } from '../common/guards/non-auth.guard';

const routes: Routes = [
  {
    path: PagesEnum.GetStarted,
    component: GetStartedComponent,
    canActivate: [NonAuthGuard],
    loadChildren: () =>
      import('./get-started/components/earth-three/earth-three.module').then(
        (m) => m.EarthModule
      ),
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: PagesEnum.TripsPage,
        component: TripsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
