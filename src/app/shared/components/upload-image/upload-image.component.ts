import { Component, EventEmitter, Output } from '@angular/core';
import { IconEnum } from 'src/app/common/enums/icons.enum';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent {
  @Output() handleUpload = new EventEmitter<File>();
  public readonly uploadSvg = IconEnum.Upload;

  public fileBrowseHandler(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files) this.fileUpload(target.files[0]);
  }

  public fileUpload(file: File) {
    this.handleUpload.emit(file);
  }
}
