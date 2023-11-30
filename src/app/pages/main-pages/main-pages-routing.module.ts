import { AuthGuard } from '../../common/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesEnum } from '../../common/enums/route.enum';
import { MainPagesComponent } from './main-pages.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: MainPagesComponent,
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
export class MainPagesRoutingModule {}
