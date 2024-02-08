import { Component } from '@angular/core';
import { StepEnum } from 'src/app/common/enums/step.enum';
import { CreateTripService } from 'src/app/shared/services/create-trip.service';

@Component({
  selector: 'app-select-step',
  templateUrl: './select-step.component.html',
  styleUrls: ['./select-step.component.scss'],
})
export class SelectStepComponent {
  public readonly StepEnum = StepEnum;
  constructor(public readonly createTripService: CreateTripService) {}
}
