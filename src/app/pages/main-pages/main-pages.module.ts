// Common
import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

// Components
import { MainPagesComponent } from './main-pages.component';
import { ProfileComponent } from './profile/profile.component';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { MainPagesRoutingModule } from './main-pages-routing.module';
import { TripsComponent } from './trips/trips.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPagesComponent, TripsComponent, ProfileComponent],
  imports: [
    SharedModule,
    MainPagesRoutingModule,
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MainPagesModule {}
