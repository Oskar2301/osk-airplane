import { Component, Input } from '@angular/core';
import { ITrip } from 'src/app/api/trips/trips-api.interface';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss'],
})
export class TripCardComponent {
  @Input() trip: ITrip;

  public readonly defaultImage = 'assets/images/default-image.png';
}
