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
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AvatarUploadComponent } from './profile/components/avatar-upload/avatar-upload.component';
import { CardFlipComponent } from './profile/components/card-flip/card-flip.component';

@NgModule({
  declarations: [MainPagesComponent, TripsComponent, ProfileComponent, AvatarUploadComponent, CardFlipComponent],
  imports: [
    SharedModule,
    MainPagesRoutingModule,
    CommonModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
  ],
})
export class MainPagesModule {}
