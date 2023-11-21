import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PagesNavigateEnum } from '../../common/enums/route.enum';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  public readonly notFoundGif = 'assets/gif/not-found.gif';

  constructor(private readonly router: Router) {}

  public handleNavigate(): void {
    this.router.navigate([PagesNavigateEnum.TripsPage]);
  }
}
