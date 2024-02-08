import { Component } from '@angular/core';
import { CreateTripService } from 'src/app/shared/services/create-trip.service';
import { Country } from 'world-countries';
import { StepEnum } from 'src/app/common/enums/step.enum';

@Component({
  selector: 'app-location-step',
  templateUrl: './location-step.component.html',
  styleUrls: ['./location-step.component.scss'],
})
export class LocationStepComponent {
  public selectedCountry: Country;
  constructor(public readonly createTripService: CreateTripService) {}

  protected readonly StepEnum = StepEnum;
}
