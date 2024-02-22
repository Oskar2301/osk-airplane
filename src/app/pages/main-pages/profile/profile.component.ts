import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/api/user/user-api.interface';
import { UserService } from 'src/app/shared/services/user.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormControl, Validators } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public user: IUser = this.userService.user;

  public nameControl = new FormControl<string>('', [Validators.required]);
  public emailControl = new FormControl<string>('', [
    Validators.required,
    Validators.email,
  ]);
  public passwordControl = new FormControl<string>('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.userService.userTrigger.pipe(untilDestroyed(this)).subscribe(() => {
      this.user = this.userService.user;
    });
  }

  public submitForm(type: string, value: string | null) {
    this.userService.updateUserData({ [type]: value });
  }
}
