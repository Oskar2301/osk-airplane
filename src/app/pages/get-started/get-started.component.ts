import { Component } from '@angular/core';
import { AuthNavigateEnum } from '../../common/enums/route.enum';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss'],
})
export class GetStartedComponent {
  // ENUMS
  public readonly AuthNavigateEnum = AuthNavigateEnum;

  // ICONS
  public readonly logoImage = 'assets/images/earth_logo.png';
  public readonly arrowImage = 'assets/images/arrow-top.png';
}
