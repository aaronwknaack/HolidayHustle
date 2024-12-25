import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

export enum StoryState {
  Waiting,
  Playing,
  Finished
}

@Component({
  selector: 'app-story',
  templateUrl: './story-page.component.html',
  imports: [CommonModule],
})
export class StoryPageComponent {
  public StoryStateEnum = StoryState;
  public state: StoryState = StoryState.Waiting;

  public currentAudioIndex: number = 0;

  private audio: HTMLAudioElement;
  private audioQueue: string[] = ['story1.mp3', 'story2.mp3', 'story3.mp3'];

  constructor(private router: Router) {
    this.audio = new Audio();
    this.audio.src = this.audioQueue[this.currentAudioIndex];
    this.audio.load();
    this.audio.addEventListener('ended', this.onAudioEnded.bind(this));
  }

  startStory() {
    this.state = StoryState.Playing;
    this.playAudio();
  }

  // left() {
  //   if (this.currentAudioIndex === 0) {
  //     this.state = StoryState.Waiting;
  //     return;
  //   }

  //   if (this.currentAudioIndex === 1){
  //     this.state = StoryState.Waiting;  
  //   }

  //   this.audio.pause();
  //   this.currentAudioIndex--;
  //   this.playAudio();
  // }

  // right() {
  //   if (this.state == StoryState.Waiting) {
  //     this.startStory();
  //     return;
  //   }

  //   if (this.state == StoryState.Playing && this.currentAudioIndex < this.audioQueue.length - 1) {
  //     this.state = StoryState.Waiting;  
  //   }

  //   this.audio.pause();
  //   this.currentAudioIndex--;
  //   this.playAudio();
  // }

  skip() {
    this.audio.pause();
    this.currentAudioIndex = 0;
    this.state = StoryState.Finished;
  }

  startGame() {
    this.router.navigate(['/game']);
  }

  playAudio() {
    this.audio.play();
  }

  private onAudioEnded() {
    this.currentAudioIndex++;
    if (this.currentAudioIndex < this.audioQueue.length) {
      this.audio.src = this.audioQueue[this.currentAudioIndex];
      this.audio.load();
      this.audio.play();
    }

    if (this.currentAudioIndex === this.audioQueue.length) {
      this.state = StoryState.Finished;
    }
  }
}
