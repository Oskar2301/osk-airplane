import { Component, Input } from '@angular/core';
import { IUser } from '../../../api/user/user-api.interface';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent {
  @Input() user: IUser;
  @Input() isLoading: boolean;
  @Input() classes: string;
  @Input() preview: string | ArrayBuffer | null | undefined;

  public get isImage(): boolean {
    return !!this.user?.avatarUrl;
  }

  public get firstLetter(): string {
    return this.user?.name?.slice(0, 1).toUpperCase();
  }
}
