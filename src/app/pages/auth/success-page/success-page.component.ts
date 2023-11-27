import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DescriptionForChange,
  DescriptionForForgot,
  TitleForChange,
  TitleForForgot,
} from './const/success-text.const';
import { AuthNavigateEnum } from '../../../common/enums/route.enum';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['../auth.styles.scss', './success-page.component.scss'],
})
export class SuccessPageComponent implements OnInit {
  public title: string;
  public description: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.initData();
  }

  public handleNavigate() {
    this.router.navigate([AuthNavigateEnum.Login]);
  }

  private initData(): void {
    const type = this.route.snapshot.queryParamMap.get('type');

    if (type === 'change') {
      this.title = TitleForChange;
      this.description = DescriptionForChange;
    } else {
      this.title = TitleForForgot;
      this.description = DescriptionForForgot;
    }
  }
}
