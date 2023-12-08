import { NgModule } from '@angular/core';
import { GetStartedComponent } from './get-started/get-started.component';
import { PagesRoutingModule } from './pages-routing.module';
import { EarthModule } from './get-started/components/earth-three/earth-three.module';
import { NgOptimizedImage } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { MainPagesModule } from "./main-pages/main-pages.module";

@NgModule({
  declarations: [GetStartedComponent, NotFoundComponent],
  imports: [PagesRoutingModule, EarthModule, NgOptimizedImage, SharedModule, MainPagesModule],
  providers: [],
})
export class PagesModule {}
