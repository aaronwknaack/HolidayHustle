import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-game',
  templateUrl: './game-page.component.html',
  imports: [CommonModule]
})
export class GamePageComponent {
  constructor() {}
}
