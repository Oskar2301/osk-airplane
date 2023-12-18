import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.scss'],
})
export class MainPagesComponent implements OnInit {
  public isLoading = this.userService.isLoading;
  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.userService.getUser();
  }
}
