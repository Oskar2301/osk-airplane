import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PagesNavigateEnum } from "../../common/enums/route.enum";
import { UserService } from "../../shared/services/user.service";

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.scss']
})
export class MainPagesComponent implements OnInit {
  public isLoading = this.userService.isLoading;
  constructor(private readonly router: Router, private readonly userService: UserService) {}

  ngOnInit() {
    this.router.navigate([PagesNavigateEnum.TripsPage]).then()
    this.userService.getUser();
  }
}
