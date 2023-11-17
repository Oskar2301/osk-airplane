import {NgModule} from "@angular/core";
import { LoaderComponent } from './components/loader/loader.component';
import {NgOptimizedImage} from "@angular/common";
import { BackgroundWaveComponent } from './components/background-wave/background-wave.component';

@NgModule({
  declarations: [
    LoaderComponent,
    BackgroundWaveComponent
  ],
  exports: [
    LoaderComponent,
    BackgroundWaveComponent
  ],
  imports: [
    NgOptimizedImage
  ],
  providers: [],
})
export class SharedModule { }
