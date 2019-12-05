import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { QuestionService } from '../question.service';
import { TimerComponent } from '../timer/timer.component';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  question: Question[];
  iQuestion = 0;
  currentQuestion: Question;
  answer: string;
  found: boolean;
  hasNext = true;

  constructor(private myService: QuestionService, private timer: TimerComponent) { }

  ngOnInit() {
    console.log(this.myService.test())
  }

  /**
   * laucnh a game
   */
  newGame() {

    // suffle(lespropositions)

  }

  /**
   * select the next question
   */
  loadNextQuestion() {

  }

  /**
   * calcul of time
   */
  timeSpent() {

  }

  /**
   * @returns string containning the answer given by user
   */
  answerGiven(answer: string) {


  }
  /**
   * Display the correct answer
   */
  showAnswer() {

  }
}
