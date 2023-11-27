import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesNavigateEnum } from './common/enums/route.enum';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: PagesNavigateEnum.GetStarted,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
