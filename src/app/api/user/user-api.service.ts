import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, IUserUpdate } from './user-api.interface';
import { UserEnum } from './user-api.enum';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  // Get User
  public getUser(): Observable<IUser> {
    return this.http.get<IUser>(UserEnum.GetUser);
  }

  // Update User Avatar
  public updateUserAvatar(file: File): Observable<IUser> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<IUser>(UserEnum.UpdateAvatarUser, formData);
  }

  // Update User
  public updateUser(data: IUserUpdate): Observable<IUser> {
    return this.http.post<IUser>(UserEnum.UpdateUser, data);
  }
}
