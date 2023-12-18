import { AuthGuard } from '../../common/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesEnum } from '../../common/enums/route.enum';
import { MainPagesComponent } from './main-pages.component';
import { TripsComponent } from './trips/trips.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: PagesEnum.TripsPage, pathMatch: 'full' },
  {
    path: '',
    canActivate: [AuthGuard],
    component: MainPagesComponent,
    children: [
      {
        path: PagesEnum.TripsPage,
        component: TripsComponent,
      },
      {
        path: PagesEnum.ProfilePage,
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MainPagesRoutingModule {}
