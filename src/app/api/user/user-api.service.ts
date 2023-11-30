import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IUser } from "./user-api.interface";
import { UserEnum } from "./user-api.enum";

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  // Get User
  public getUser(): Observable<IUser> {
    return this.http.get<IUser>(UserEnum.GetUser);
  }
}
