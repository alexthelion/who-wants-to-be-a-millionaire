import {Component, OnInit} from '@angular/core';
import {GameDetailsModel, QuestionModel} from './models/game.model';
import {ActivatedRoute, Router} from '@angular/router';
import {GameService} from './game.service';
import {delay, first, tap} from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  questionIndex = 0;
  currentQuestion: QuestionModel;
  currentAnswer: string | undefined;
  currentCorrectIndex: number | undefined;
  correctAnswers = 0;
  gameDetails: GameDetailsModel;

  constructor(private route: ActivatedRoute,
              private gameService: GameService, private router: Router) {
  }

  ngOnInit(): void {
    this.gameService.getCurrentGameDetails().pipe(
      first(),
      delay(700),
      tap(gameDetails => {
        this.gameDetails = Object.assign({}, gameDetails);
        if (!gameDetails) {
          this.router.navigateByUrl('/');
        }
        this.currentQuestion = this.gameDetails.questions[this.questionIndex];
      })
    ).subscribe();
  }

  nextQuestion(): void {
    this.updateScoreSummary();
    this.questionIndex += 1;
    if (!!this.currentAnswer && this.gameDetails.questions.length > this.questionIndex) {
      this.currentQuestion = undefined;
      this.currentCorrectIndex = undefined;
      this.currentQuestion = this.gameDetails.questions[this.questionIndex];
    } else {
      alert('Game Over');
      this.gameService.gameOver(this.gameDetails);
      setTimeout(() => this.router.navigateByUrl('/'), 700);
    }
  }

  private updateScoreSummary() {
    if (this.currentQuestion.correct_answer === this.currentAnswer) {
      this.correctAnswers += 1;
    } else {
      this.gameDetails.wrongAnswersCounter += 1;
    }
  }

  selectAnswer(answer: string): void {
    this.currentAnswer = answer;
    this.currentCorrectIndex = this.currentQuestion.answers.indexOf(this.currentQuestion.correct_answer);
  }

  skipQuestion(): void {
    this.gameDetails.skippedCounter += 1;
    this.currentAnswer = '';
    this.nextQuestion();
  }

  get username(): string {
    return this.gameDetails?.username;
  }
}
