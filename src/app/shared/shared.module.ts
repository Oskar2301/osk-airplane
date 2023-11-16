import {NgModule} from "@angular/core";
import { LoaderComponent } from './components/loader/loader.component';
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
  imports: [
    NgOptimizedImage
  ],
  providers: [],
})
export class SharedModule { }
