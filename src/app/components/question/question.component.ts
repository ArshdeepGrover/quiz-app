import { Component, Input, OnInit } from '@angular/core';
import { QuizQuestion } from 'src/app/models/quiz-question';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() questions: QuizQuestion[] = [];
  currentQuestion: number = 0;
  score: number = 0;
  isAnswerCorrect: boolean = false;
  quizFinish: boolean = false;
  isLoading: boolean = true;

  constructor(private quizServe: QuizService) {}

  ngOnInit(): void {}

  checkAndNextQuestion(answer: boolean) {
    if (answer) {
      this.score++;
    }
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else {
    }
  }
}
