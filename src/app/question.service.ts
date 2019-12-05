import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  score: number;
  nbQuestions: number;
  questions: Question[];
  constructor(private http: HttpClient) { }

  retrieveData(): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.backRoot}/questions`)
  }

  

  /**
   * Cut a set number of question
   */
  private setOfQuestion() {
    return this.questions.slice(0, this.nbQuestions)
  }

  private shuffle(a: any[]): any[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

}