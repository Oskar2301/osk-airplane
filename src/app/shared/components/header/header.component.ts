import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/api/user/user-api.interface';
import { UserService } from 'src/app/shared/services/user.service';
import { IOption } from '../dropdown/dropdown.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { IconEnum } from 'src/app/common/enums/icons.enum';
import { NavigationEnd, Router } from '@angular/router';
import { PagesNavigateEnum } from 'src/app/common/enums/route.enum';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { headerSearch } from 'src/app//common/const/header-search';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { TripsService } from 'src/app/shared/services/trips.service';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isLoading: boolean | null;
  public user: IUser = this.userService.user;
  public isShowElement = true;
  public isActive = false;
  public searchControl = new FormControl<string>('');
  public options: IOption[] = [
    {
      title: 'My trips',
      svgIcon: IconEnum.Trips,
      onClick: () => {},
    },
    {
      title: 'My favourite',
      svgIcon: IconEnum.Favorite,
      onClick: () => {},
    },
    {
      title: 'My profile',
      svgIcon: IconEnum.User,
      onClick: () => this.router.navigate([PagesNavigateEnum.ProfilePage]),
    },
    {
      title: 'Logout',
      class: 'logout',
      svgIcon: IconEnum.Logout,
      onClick: () => this.authService.logout(),
    },
  ];

  public readonly logoImage = 'assets/images/earth_logo.png';
  public readonly searchSvg = IconEnum.Search;
  public readonly plusSvg = IconEnum.Plus;
  public readonly TripsNavigate = PagesNavigateEnum.TripsPage;

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly tripsService: TripsService,
    private readonly router: Router,
  ) {}

  public ngOnInit(): void {
    this.initData();
  }

  public checkIsTrips(): void {
    const url: string = this.router.url;
    this.isShowElement = !headerSearch.includes(url);
  }

  public handleOpen(): void {
    this.tripsService.openCreateModal();
  }

  public handleActiveSearch(): void {
    this.isActive = !this.isActive;
  }

  private initData(): void {
    this.userService.userTrigger.pipe(untilDestroyed(this)).subscribe(() => {
      this.user = this.userService.user;
    });

    this.checkIsTrips();

    this.router.events.pipe(untilDestroyed(this)).subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.checkIsTrips();
      }
    });

    this.searchControl.valueChanges
      .pipe(untilDestroyed(this), debounceTime(1000), distinctUntilChanged())
      .subscribe((value) => {
        if (value) {
          this.tripsService.searchTrips(value);
        } else {
          this.tripsService.clearTripsSearch();
        }
      });
  }
}
