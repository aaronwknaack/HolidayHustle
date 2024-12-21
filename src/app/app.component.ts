import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameStateService } from '../game-state.service';
import * as players from '../data/players.json';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'holidayhustle';

  constructor(private gameStateService: GameStateService) {
    console.log(players);
  }

  saveData() {
    this.gameStateService.saveData();
  }
}
