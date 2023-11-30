import { Injectable } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {BehaviorSubject, catchError, finalize, of, Subject} from 'rxjs';
import { ToastService } from './toast.service';
import { UserApiService } from "../../api/user/user-api.service";
import { IUser } from "../../api/user/user-api.interface";

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly userSubject: Subject<IUser> = new Subject<IUser>();
  public readonly user = this.userSubject.asObservable();
  private readonly isLoadingSubject = new BehaviorSubject<boolean>(false);
  public readonly isLoading = this.isLoadingSubject.asObservable();

  constructor(
    private readonly userApiService: UserApiService,
    private readonly toastService: ToastService
  ) {}

  public getUser(): void {
    this.isLoadingSubject.next(true);
    this.userApiService
      .getUser()
      .pipe(
        untilDestroyed(this),
        finalize(() => this.isLoadingSubject.next(false)),
        catchError((e) => {
          this.toastService.error(e.error.message, 'Error');
          return of(e);
        })
      )
      .subscribe( (result) => {
        this.setUser(result)
      });
  }

  public setUser(user: IUser): void {
    this.userSubject.next(user)
  }
}
