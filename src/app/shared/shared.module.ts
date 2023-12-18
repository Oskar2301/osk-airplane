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
  ],
  imports: [NgOptimizedImage, CommonModule, NgbModule, RouterModule],
  providers: [],
})
export class SharedModule {}
