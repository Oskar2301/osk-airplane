import { NgModule } from '@angular/core';
import { GetStartedComponent } from './get-started/get-started.component';
import { PagesRoutingModule } from "./pages-routing.module";
import {EarthModule} from "./get-started/components/earth-three/earth-three.module";
import {NgOptimizedImage} from "@angular/common";

@NgModule({
  declarations: [GetStartedComponent],
  imports: [PagesRoutingModule, EarthModule, NgOptimizedImage],
  providers: [],
})
export class PagesModule { }
