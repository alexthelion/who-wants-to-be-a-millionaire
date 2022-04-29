import {Component, OnInit} from '@angular/core';
import {QuestionModel} from './models/game.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  questionIndex = 0;
  questions: QuestionModel[];
  currentQuestion: QuestionModel = {
    question: '',
    correct_answer: '',
    incorrect_answers: [],
    category: '',
    difficulty: ''
  };
  currentAnswer: string | undefined;
  currentCorrectIndex: number | undefined;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.questions = this.route.snapshot.data['questions'];
    this.currentQuestion = this.questions[this.questionIndex];
  }

  nextQuestion(): void {
    if (!!this.currentAnswer && this.questions.length > this.questionIndex) {
      this.currentQuestion = undefined;
      this.currentCorrectIndex = undefined;
      this.currentQuestion = this.questions[this.questionIndex++];
    } else {
      alert('Game Over');
    }
  }

  selectAnswer(answer: string): void {
    this.currentAnswer = answer;
    this.currentCorrectIndex = 0; //todo: fix questions array
  }
}
