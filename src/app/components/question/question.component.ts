import { Component, OnInit } from '@angular/core';
import { QuizQuestion } from 'src/app/models/quiz-question';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  questions: QuizQuestion[] = [];
  currentQuestion: number = 0;
  score: number = 0;
  isAnswerCorrect: boolean = false;
  quizFinish: boolean = false;
  previousScore!: number;

  constructor(private quizServe: QuizService) {}

  ngOnInit(): void {
    this.quizServe.getQuestions().subscribe((data: QuizQuestion[]) => {
      this.questions = data;
    });
    const userScore = localStorage.getItem('userQuizScore');
    if (userScore) {
      this.previousScore = parseInt(userScore, 10); // Parse the stored score to an integer
    }
  }

  nextQuestion() {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else {
      this.showResult();
    }
  }
  checkScore(answer: boolean) {
    if (answer) {
      this.score++;
    }
    this.nextQuestion();
  }
  showResult() {
    this.quizFinish = true;
    localStorage.setItem('userQuizScore', this.score.toString());
  }

  startAgain() {
    window.location.reload();
  }

  resetPreviousScore() {
    if (this.previousScore) {
      localStorage.removeItem('userQuizScore');
      this.previousScore = 0; // Reset the score in the component
    }
  }
}
