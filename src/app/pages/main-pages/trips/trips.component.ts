import { Component, OnInit } from '@angular/core';
import { TypesTrips } from 'src/app/common/const/types-trips';
import { TripsService } from 'src/app/shared/services/trips.service';
import { ITrip } from 'src/app/api/trips/trips-api.interface';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent implements OnInit {
  public trips: ITrip[] = [];
  public tripsType = TypesTrips;
  public isLoading = this.tripsService.isLoading;

  constructor(private tripsService: TripsService) {}

  public ngOnInit() {
    this.initData();
  }

  public handleFilter(tripType: {
    icon: string;
    title: string;
    typeName: string;
  }): void {
    this.tripsService.filterTrips(tripType.typeName);
  }

  private initData(): void {
    this.tripsService.getTrips();

    this.tripsService.tripsTrigger.pipe(untilDestroyed(this)).subscribe(() => {
      const searchTrips = this.tripsService.tripsSearch;
      if (searchTrips.length) {
        this.trips = searchTrips;
      } else {
        this.trips = this.tripsService.trips;
      }
    });
  }
}
