// Common
import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

// Components
import { MainPagesComponent } from './main-pages.component';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { MainPagesRoutingModule } from './main-pages-routing.module';
import { TripsComponent } from "./trips/trips.component";

@NgModule({
  declarations: [MainPagesComponent, TripsComponent],
  imports: [SharedModule, MainPagesRoutingModule, CommonModule, NgOptimizedImage]
})
export class MainPagesModule {}
