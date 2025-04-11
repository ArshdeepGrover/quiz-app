import { Component, OnInit } from '@angular/core';
import * as confetti from 'canvas-confetti';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  score!: number;
  canvas = <HTMLCanvasElement>document.getElementById('confetti');

  constructor() {}
  ngOnInit(): void {
    this.score = Number(localStorage.getItem('userQuizScore'));
    if (this.score >= 7) {
      this.generateConfetti();
    }
  }

  generateConfetti() {
    confetti.create(this.canvas, { resize: true })({
      shapes: ['square', 'circle', 'star'],
      particleCount: 1000,
      spread: 360,
      zIndex: 9999,
      disableForReducedMotion: true,
      ticks: 500,
    });
  }

  retry() {}
}
