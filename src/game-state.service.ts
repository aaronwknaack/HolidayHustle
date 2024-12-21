import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class GameStateService {
  constructor(private cookieService: CookieService) {}

  saveData() {
    var expiration = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
    const jsonData = { name: 'John', age: 30 };
    const jsonString = JSON.stringify(jsonData);
    this.cookieService.set('gamestate', jsonString, expiration);
  }

  readData() {
    const jsonString = this.cookieService.get('gamestate');
    if (jsonString) {
      const jsonData = JSON.parse(jsonString);
      console.log(jsonData);
    }
  }
}
