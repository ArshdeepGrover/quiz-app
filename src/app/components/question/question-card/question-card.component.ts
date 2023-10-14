import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuizQuestion } from 'src/app/models/quiz-question';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.scss'],
})
export class QuestionCardComponent {
  @Input() question!: QuizQuestion;
  @Input() questionNumber!: number;
  @Input() totalQuestion!: number;
  isAnswerCorrect: boolean = false;
  isAnswerSelected: boolean = false;

  @Output() showNextQuestion = new EventEmitter<boolean>();

  selectAnswer(question: QuizQuestion, selectedAnswer: string) {
    const correctAnswer = question.correct_answer;
    this.isAnswerCorrect = selectedAnswer === correctAnswer;
    this.isAnswerSelected = true;
  }

  nextQuestion() {
    this.showNextQuestion.emit(this.isAnswerCorrect);
  }
}
