import {Component, Input, OnChanges, ViewEncapsulation} from '@angular/core';
import { HttpBackend, HttpClient } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SvgIconComponent implements OnChanges{
  @Input() public name: string
  @Input() public classes: string | object;
  public svgIcon: any;

  private httpClient: HttpClient;

  constructor(private readonly handler: HttpBackend, private sanitizer: DomSanitizer) {
    this.httpClient = new HttpClient(this.handler)
  }

  public ngOnChanges() {
    if(!this.name) {
      this.svgIcon = '';
      return;
    }

    this.httpClient.get(this.name, { responseType: 'text' })
      .subscribe(value => {
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value)
      })
  }
}
