import { Component, OnInit } from '@angular/core';
import { IUser, IUserUpdate } from '../../../api/user/user-api.interface';
import { UserService } from '../../../shared/services/user.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormBuilder, Validators } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public user: IUser = this.userService.user;
  public preview: string | ArrayBuffer | null | undefined = '';
  public profileForm = this.fb.group({
    name: [this.user?.name || '', [Validators.required]],
    email: [this.user?.email || '', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6)]],
  });

  constructor(
    private readonly userService: UserService,
    private readonly fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.userService.userTrigger.pipe(untilDestroyed(this)).subscribe(() => {
      this.user = this.userService.user;
      this.profileForm.setValue({
        name: this.user.name,
        email: this.user.email,
        password: '',
      });
    });
  }

  private get isSameName(): boolean {
    return this.user.name === this.profileForm.controls.name.value;
  }

  private get isSameEmail(): boolean {
    return this.user.email === this.profileForm.controls.email.value;
  }

  public fileUpload(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.preview = e.target?.result;
      };

      reader.readAsDataURL(file);
      this.userService.updateUserAvatar(file);
    }
  }

  public submitProfile(): void {
    const valueFormData = this.profileForm.value;
    let data: IUserUpdate = {};

    if (!this.isSameName && valueFormData.name) {
      data.name = valueFormData.name;
    }

    if (valueFormData.password) {
      data.password = valueFormData.password;
      this.profileForm.controls.password.setValue('');
    }

    if (!this.isSameEmail && valueFormData.email) {
      data.email = valueFormData.email;
    }

    this.userService.updateUserData(data);
  }
}
