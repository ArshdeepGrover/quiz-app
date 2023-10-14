import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  previousScore!: number;
  constructor() {}
  ngOnInit(): void {
    const userScore = localStorage.getItem('userQuizScore');
    if (userScore) {
      this.previousScore = parseInt(userScore, 10); // Parse the stored score to an integer
    }
  }
}
