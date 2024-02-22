import { NgModule } from '@angular/core';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BackgroundWaveComponent } from './components/background-wave/background-wave.component';
import { InputOutlineComponent } from './components/input-outline/input-outline.component';
import { CheckMarkComponent } from './components/check-mark/check-mark.component';
import { ToastComponent } from './components/toast/toast.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { TripCardComponent } from './components/trip-card/trip-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTripComponent } from './modals/create-trip/create-trip.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { LocationStepComponent } from './modals/create-trip/components/location-step/location-step.component';
import { SelectStepComponent } from './modals/create-trip/components/select-step/select-step.component';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormStepComponent } from './modals/create-trip/components/form-step/form-step.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { DndDirective } from '../common/directives/dnd.directive';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    LoaderComponent,
    BackgroundWaveComponent,
    InputOutlineComponent,
    CheckMarkComponent,
    ToastComponent,
    ButtonComponent,
    HeaderComponent,
    UserAvatarComponent,
    DropdownComponent,
    SvgIconComponent,
    InputComponent,
    TripCardComponent,
    CreateTripComponent,
    LocationStepComponent,
    SelectStepComponent,
    MapComponent,
    FormStepComponent,
    UploadImageComponent,
    DndDirective,
    CardComponent,
  ],
  exports: [
    LoaderComponent,
    BackgroundWaveComponent,
    InputOutlineComponent,
    CheckMarkComponent,
    ToastComponent,
    ButtonComponent,
    HeaderComponent,
    SvgIconComponent,
    UserAvatarComponent,
    InputComponent,
    TripCardComponent,
    CreateTripComponent,
    CardComponent,
    UploadImageComponent,
  ],
  imports: [
    NgOptimizedImage,
    CommonModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    LeafletModule,
  ],
  providers: [],
})
export class SharedModule {}
