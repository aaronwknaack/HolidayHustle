import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CardGameState, IGameCard } from '../../../data/data.service';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  imports: [CommonModule]
})
export class CardGameComponent {
  @Input() card: IGameCard | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  get sanitizedImage(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.card?.icon ?? '');
  }

  get isReady(): boolean {
    return this.card?.state === CardGameState.Ready;
  }

  get isInProgress(): boolean {
    return this.card?.state === CardGameState.InProgress;
  }

  get isComplete(): boolean {
    return this.card?.state === CardGameState.Complete;
  }
}
