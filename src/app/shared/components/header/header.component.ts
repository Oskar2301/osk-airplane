import { Component, Input } from '@angular/core';
import { IUser } from '../../../api/user/user-api.interface';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { IOption } from '../dropdown/dropdown.component';
import { AuthService } from '../../services/auth.service';
import { IconEnum } from "../../../common/enums/icons.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isLoading: boolean | null;
  public user: Observable<IUser> = this.userService.user;
  public isActive = false;
  public options: IOption[] = [
    {
      title: 'My trips',
      svgIcon: IconEnum.Trips,
      onClick: () => {}
    },
    {
      title: 'My favourite',
      svgIcon: IconEnum.Favourite,
      onClick: () => {}
    },
    {
      title: 'Logout',
      class: 'logout',
      svgIcon: IconEnum.Logout,
      onClick: () => this.authService.logout()
    },
  ];

  public readonly logoImage = 'assets/images/earth_logo.png';
  public readonly searchSvg = IconEnum.Search;

  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService
  ) {}

  public handleActiveSearch(): void {
    this.isActive = !this.isActive;
  }
}
