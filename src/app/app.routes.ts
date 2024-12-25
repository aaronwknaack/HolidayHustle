import { Routes } from '@angular/router';
import { StoryPageComponent } from './story/story-page.component';
import { GamePageComponent } from './game/game-page.component';

export const routes: Routes = [
    {path: '', redirectTo: 'story', pathMatch: 'full'},
    {path: 'story', component: StoryPageComponent},
    {path: 'game', component: GamePageComponent}    
];
