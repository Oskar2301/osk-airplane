import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser } from 'src/app/api/user/user-api.interface';

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.scss'],
})
export class AvatarUploadComponent {
  @Input() user: IUser = this.userService.user;
  public preview: string | ArrayBuffer | null | undefined = '';

  constructor(private readonly userService: UserService) {}

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
}
