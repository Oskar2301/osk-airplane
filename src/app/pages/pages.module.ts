import { NgModule } from '@angular/core';
import { GetStartedComponent } from './get-started/get-started.component';
import { PagesRoutingModule } from './pages-routing.module';
import { EarthModule } from './get-started/components/earth-three/earth-three.module';
import { NgOptimizedImage } from '@angular/common';
import { TripsComponent } from './trips/trips.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GetStartedComponent, TripsComponent, NotFoundComponent],
  imports: [PagesRoutingModule, EarthModule, NgOptimizedImage, SharedModule],
  providers: [],
})
export class PagesModule {}
