import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizQuestion } from 'src/app/models/quiz-question';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private apiUrl = 'https://quizapi.io/api/v1/questions';
  private apiKey = 'emlLrCR0PaosoArvo4KWVnDhvjn0vzunHsivZ3MR';
  constructor(private http: HttpClient) {}

  getQuestions(
    limit: number = 10,
    difficulty?: string,
    category?: string
  ): Observable<QuizQuestion[]> {
    let params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('limit', limit);
    if (difficulty) {
      params = params.set('difficulty', difficulty);
    }
    if (category) {
      params = params.set('category', category);
    }

    return this.http.get<QuizQuestion[]>(`${this.apiUrl}`, { params });
  }
}
