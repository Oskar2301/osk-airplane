import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-flip',
  templateUrl: './card-flip.component.html',
  styleUrls: ['./card-flip.component.scss'],
})
export class CardFlipComponent {
  @ViewChild('card', { static: true }) elementRef: ElementRef;
  public flipped = false;

  public toggleFlipCard(): void {
    this.flipped = !this.flipped;
  }
}
