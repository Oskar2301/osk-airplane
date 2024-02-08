import { Injectable } from '@angular/core';
import { TypesTrips } from 'src/app/common/const/types-trips';
import { StepEnum } from 'src/app/common/enums/step.enum';
import { getAll, ICountry } from 'src/app/common/helpers/country.helper';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class CreateTripService {
  public currentStep = StepEnum.SelectType;
  public countries = getAll();
  public createForm = this.fb.group({
    type: ['', [Validators.required]],
    country: [{} as ICountry, [Validators.required]],
  });

  // Selected Type
  public tripsType = TypesTrips;
  public selectedType = '';

  constructor(
    private readonly fb: FormBuilder,
    private readonly activatedModal: NgbActiveModal,
  ) {}

  public handleBackStep(step: StepEnum): void {
    this.currentStep = step;
  }

  public handleNextStep(step: StepEnum, value?: any): void {
    if (this.currentStep === StepEnum.SelectType) {
      this.createForm.patchValue({ type: this.selectedType });
    }

    if (this.currentStep === StepEnum.Location) {
      this.createForm.patchValue({ country: value });
    }

    this.currentStep = step;
  }

  // Select Type
  public selectType(type: string): void {
    this.selectedType = type;
  }
}
