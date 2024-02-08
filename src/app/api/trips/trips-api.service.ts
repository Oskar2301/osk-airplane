import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripsEnum } from './trips-api.enum';
import { ITrip, ITripCreate } from './trips-api.interface';

@Injectable({
  providedIn: 'root',
})
export class TripsApiService {
  constructor(private http: HttpClient) {}

  public getTrips(): Observable<ITrip[]> {
    return this.http.get<ITrip[]>(TripsEnum.GetAll);
  }

  public searchTrips(search: string): Observable<ITrip[]> {
    return this.http.post<ITrip[]>(TripsEnum.Search, { search });
  }

  public addTrip(trip: ITripCreate): Observable<ITrip> {
    const formData = new FormData();

    for (const [key, value] of Object.entries(trip)) {
      formData.append(key === 'image' ? 'file' : key, value);
    }

    return this.http.post<ITrip>(TripsEnum.Add, formData);
  }
}
