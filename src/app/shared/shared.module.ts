import { NgModule } from '@angular/core';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BackgroundWaveComponent } from './components/background-wave/background-wave.component';
import { InputOutlineComponent } from './components/input-outline/input-outline.component';
import { CheckMarkComponent } from './components/check-mark/check-mark.component';
import { ToastComponent } from './components/toast/toast.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    LoaderComponent,
    BackgroundWaveComponent,
    InputOutlineComponent,
    CheckMarkComponent,
    ToastComponent,
    ButtonComponent,
  ],
  exports: [
    LoaderComponent,
    BackgroundWaveComponent,
    InputOutlineComponent,
    CheckMarkComponent,
    ToastComponent,
    ButtonComponent,
  ],
  imports: [NgOptimizedImage, CommonModule],
  providers: [],
})
export class SharedModule {}
