import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BehaviorSubject, finalize, Subject } from 'rxjs';
import { UserApiService } from '../../api/user/user-api.service';
import { IUser, IUserUpdate } from '../../api/user/user-api.interface';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: IUser;

  private readonly userSubject: Subject<void> = new Subject();
  public readonly userTrigger = this.userSubject.asObservable();
  private readonly isLoadingSubject = new BehaviorSubject<boolean>(false);
  public readonly isLoading = this.isLoadingSubject.asObservable();

  constructor(private readonly userApiService: UserApiService) {}

  // Get User
  public getUser(): void {
    this.isLoadingSubject.next(true);
    this.userApiService
      .getUser()
      .pipe(
        untilDestroyed(this),
        finalize(() => this.isLoadingSubject.next(false)),
      )
      .subscribe((result) => {
        this.setUser(result);
      });
  }

  // Update User Avatar
  public updateUserAvatar(file: File): void {
    this.isLoadingSubject.next(true);
    this.userApiService
      .updateUserAvatar(file)
      .pipe(
        untilDestroyed(this),
        finalize(() => this.isLoadingSubject.next(false)),
      )
      .subscribe((result) => {
        this.setUser(result);
      });
  }

  // Update User Data
  public updateUserData(data: IUserUpdate): void {
    this.isLoadingSubject.next(true);
    this.userApiService
      .updateUser(data)
      .pipe(
        untilDestroyed(this),
        finalize(() => this.isLoadingSubject.next(false)),
      )
      .subscribe((result) => {
        this.setUser(result);
      });
  }

  public setUser(user: IUser): void {
    this.user = user;
    this.userSubject.next();
  }
}
