import { Component, OnInit } from '@angular/core';
import { QuizQuestion } from 'src/app/models/quiz-question';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  questions: QuizQuestion[] = [];
  isLoading = false;
  selectedDifficulty: string = '';
  selectedCategory: string = '';
  constructor(private quizServe: QuizService) {}
  ngOnInit(): void {}

  getQuestions() {
    this.isLoading = true;
    this.quizServe
      .getQuestions(10, this.selectedDifficulty, this.selectedCategory)
      .subscribe((data: QuizQuestion[]) => {
        this.questions = data;
        this.isLoading = false;
      });
  }
}
