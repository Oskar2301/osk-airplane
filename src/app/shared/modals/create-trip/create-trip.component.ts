import { Component, OnInit } from '@angular/core';
import { IconEnum } from 'src/app/common/enums/icons.enum';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StepEnum } from 'src/app/common/enums/step.enum';
import { CreateTripService } from 'src/app/shared/services/create-trip.service';
import { TripsService } from 'src/app/shared/services/trips.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss'],
  providers: [CreateTripService],
})
export class CreateTripComponent implements OnInit {
  // Icons & Enums
  public readonly logoImage = 'assets/images/earth_logo.png';
  public readonly closeSvg = IconEnum.Close;

  constructor(
    private readonly activatedModal: NgbActiveModal,
    private readonly createTripService: CreateTripService,
    private readonly tripsService: TripsService,
  ) {}

  ngOnInit() {
    this.tripsService.tripsTrigger
      .pipe(untilDestroyed(this))
      .subscribe(() => this.closeModal());
  }

  // Getters
  public get isSelectStep(): boolean {
    return this.createTripService.currentStep === StepEnum.SelectType;
  }

  public get isLocationStep(): boolean {
    return this.createTripService.currentStep === StepEnum.Location;
  }

  public get isFormStep(): boolean {
    return this.createTripService.currentStep === StepEnum.Form;
  }

  // Common methods
  public closeModal(): void {
    this.activatedModal.close();
  }
}
