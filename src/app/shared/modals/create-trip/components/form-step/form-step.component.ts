import { Component } from '@angular/core';
import { StepEnum } from 'src/app/common/enums/step.enum';
import { CreateTripService } from 'src/app/shared/services/create-trip.service';
import { FormBuilder, Validators } from '@angular/forms';
import { TripsService } from 'src/app/shared/services/trips.service';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss'],
})
export class FormStepComponent {
  public isLoading = this.tripService.isLoading;
  public previewTripForm = this.fb.group(
    {
      _id: '1',
      type: this.createTripService.createForm.value.type!,
      country: this.createTripService.createForm.value.country?.label,
      countPlaces: 0,
      cost: [0, [Validators.required, Validators.min(20)]],
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      imageFile: ['', [Validators.required]],
      image: ['', [Validators.required]],
      updatedAt: new Date(),
      createdAt: new Date(),
    },
    { nonNullable: true },
  );

  public readonly StepEnum = StepEnum;

  constructor(
    public readonly createTripService: CreateTripService,
    private readonly fb: FormBuilder,
    private readonly tripService: TripsService,
  ) {}

  public handleUpload(file: File): void {
    const url = URL.createObjectURL(file);
    this.previewTripForm.patchValue({ imageFile: file, image: url });
  }

  public submitForm(): void {
    const { name, countPlaces, cost, date, imageFile, type, country } =
      this.previewTripForm.value;
    this.tripService.addTrip({
      name,
      country,
      type,
      image: imageFile,
      cost,
      date,
      countPlaces,
    });
  }
}
