import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { TripsApiService } from 'src/app/api/trips/trips-api.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ITrip, ITripCreate } from 'src/app/api/trips/trips-api.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateTripComponent } from '../modals/create-trip/create-trip.component';
import { ToastService } from './toast.service';

@UntilDestroy({ checkProperties: true })
@Injectable({ providedIn: 'root' })
export class TripsService {
  public trips: ITrip[] = [];
  public tripsSearch: ITrip[] = [];

  private readonly tripsSubject = new Subject<void>();
  public readonly tripsTrigger = this.tripsSubject.asObservable();

  private readonly loadingSubject = new BehaviorSubject<boolean>(false);
  public readonly isLoading = this.loadingSubject.asObservable();

  constructor(
    private readonly tripsApiService: TripsApiService,
    private readonly modal: NgbModal,
    private readonly toast: ToastService,
  ) {}

  public getTrips(): void {
    this.loadingSubject.next(true);
    this.tripsApiService
      .getTrips()
      .pipe(untilDestroyed(this))
      .subscribe((trips) => {
        this.setTrips(trips);
      });
  }

  public searchTrips(value: string): void {
    this.loadingSubject.next(true);
    this.tripsApiService
      .searchTrips(value)
      .pipe(untilDestroyed(this))
      .subscribe((trips) => {
        this.setSearchTrips(trips);
      });
  }

  public addTrip(data: ITripCreate): void {
    this.loadingSubject.next(true);
    this.tripsApiService
      .addTrip(data)
      .pipe(untilDestroyed(this))
      .subscribe((trip) => {
        this.addTripItem(trip);
      });
  }

  public clearTripsSearch(): void {
    this.tripsSearch = [];
    this.tripsSubject.next();
  }

  public openCreateModal(): void {
    this.modal.open(CreateTripComponent, { centered: true, size: 'lg' });
  }

  public filterTrips(type: string): void {
    this.tripsSearch = this.trips.filter((trip) => trip.type === type);
    this.tripsSubject.next();
  }

  private addTripItem(trip: ITrip): void {
    this.loadingSubject.next(false);
    this.trips.push(trip);
    this.toast.success('Success', 'Trip has been create');
    this.tripsSubject.next();
  }

  private setSearchTrips(trips: ITrip[]): void {
    this.loadingSubject.next(false);
    this.tripsSearch = [...trips];
    this.tripsSubject.next();
  }

  private setTrips(trips: ITrip[]): void {
    this.loadingSubject.next(false);
    this.trips = [...trips];
    this.tripsSubject.next();
  }
}
