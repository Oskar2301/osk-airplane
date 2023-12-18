import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../../../api/user/user-api.interface';
import { UserService } from '../../services/user.service';
import { IOption } from '../dropdown/dropdown.component';
import { AuthService } from '../../services/auth.service';
import { IconEnum } from '../../../common/enums/icons.enum';
import { NavigationEnd, Router } from '@angular/router';
import { PagesNavigateEnum } from '../../../common/enums/route.enum';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { headerSearch } from '../../../common/const/header-search';

@UntilDestroy()
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isLoading: boolean | null;
  public user: IUser = this.userService.user;
  public isShowSearch = true;
  public isActive = false;
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
  public readonly TripsNavigate = PagesNavigateEnum.TripsPage;

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  public ngOnInit(): void {
    this.userService.userTrigger.pipe(untilDestroyed(this)).subscribe(() => {
      this.user = this.userService.user;
    });

    this.checkIsTrips();

    this.router.events.pipe(untilDestroyed(this)).subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.checkIsTrips();
      }
    });
  }

  public checkIsTrips(): void {
    const url: string = this.router.url;
    this.isShowSearch = !headerSearch.includes(url);
  }

  public handleActiveSearch(): void {
    this.isActive = !this.isActive;
  }
}
